// React Modules
import { useEffect, useState } from "react";

// React ID Generator
import nextId from "react-id-generator";

// Context Store
import { useCanvasContext } from "../../../../context/canvasContextStore";

// Components
import GeneralButton from "../generalButton";

// Context Menu Util
import contextMenu from "../../../../utils/contextMenu";

const AddCommentBtn = () => {
  const {
    textInputRef,
    setSvgFn,
    editing,
    setEditing,
    setCurrentTextUpdating,
    currentTextUpdating,
  } = useCanvasContext();

  // Component Level States
  const [commentBox, setCommentBox] = useState(null);

  useEffect(() => {
    // Get textInputRef
    const textInputBox = textInputRef.current;

    // If available update state
    if (textInputBox) {
      setCommentBox(textInputBox);
    }
  }, [textInputRef]);

  const addTextSvg = () => {
    // console.log(svgFn);

    if (commentBox && commentBox.value !== "") {
      // Initialize Unique IDs
      const textSvgId = nextId();

      if (editing === false) {
        setSvgFn((current) => {
          //const currentDup = current;

          // current.node.instance.findOne(`#svgText${textSvgId}`).remove();

          const parentTextGroup = current.group();

          // Add SVG Group with unique ID and some attributes to main SVG 'Canvas'
          parentTextGroup.attr({
            id: `svgText${textSvgId}`,
            class: "causal-graph-component",
          });

          const groupList = current.node.instance.find(`#svgText${textSvgId}`);

          // Resolve double group insertion bug
          if (groupList.length > 1) {
            const lastEl = groupList[groupList.length - 1];
            lastEl.remove();
          }

          // Adding Editing Option
          parentTextGroup.data("editable", true);

          // Add Text to the created group
          parentTextGroup
            .text(commentBox.value)
            .font({
              fill: "#000",
              anchor: "middle",
            })
            .attr({
              class: "comment-text-svg",
            });

          // Move it from the left edges
          parentTextGroup.translate(200, 20);

          // Empty Out Comment Box
          commentBox.value = "";

          // Draggable
          parentTextGroup.draggable();

          // Context Menu Creation
          contextMenu(
            parentTextGroup,
            commentBox,
            setCurrentTextUpdating,
            setEditing
          );

          return current;
        });
      } else {
        // Get Current Comment Box Value
        const currentCommentBoxVal = commentBox.value;

        setSvgFn((current) => {
          const currentInstance = current.node.instance;

          const currentElEdited = currentInstance.findOne(
            `#${currentTextUpdating}`
          );

          const textNode = currentElEdited.findOne(".comment-text-svg");

          const contextMenu = currentElEdited.findOne(".context-menu");

          // Update Text
          textNode.text(currentCommentBoxVal);

          // Hide Context Menu
          contextMenu.hide();

          return current;
        });

        // Empty out comment box
        commentBox.value = "";

        // Set Editing back to false
        setEditing(false);
      }
    }
  };

  return (
    <GeneralButton
      buttonText={editing ? "Edit Comment" : "Add Comment"}
      onClick={addTextSvg}
    />
  );
};

export default AddCommentBtn;
