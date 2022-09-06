/**
 * --------------------------------------------------------------------------
 * Container to hold all causal graph tools
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// React Modules
import { useEffect, useState } from "react";

// Flatted
import { parse } from "flatted";

// Context Menu
import contextMenu from "../../../utils/contextMenu";

// SVG.js modules
import { SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.draggable.js";

// Import useCanvasContext
import { useCanvasContext } from "../../../context/canvasContextStore";

// ToolBox
import EdgesContainer from "../../general-elements/tools/edges";
import CommentInputSection from "../../general-elements/tools/text";
import NodesContainer from "../../general-elements/tools/nodes";

const ToolBox = () => {
  const {
    canvasRef,
    setSvgFn,
    textInputRef,
    setCurrentTextUpdating,
    setEditing,
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

  useEffect(() => {
    const canvasEl = canvasRef.current;

    const localStorageVal = localStorage.getItem("causalGraph");

    if (canvasEl) {
      if (localStorageVal !== null) {
        const svgItems = parse(localStorageVal);

        if (!canvasEl.querySelector("svg")) {
          const draw = SVG().addTo(canvasRef.current).size("100%", "100%");

          // Restore Elements
          draw.svg(svgItems);

          // Restore Draggability
          draw.each(function (i, children) {
            this.draggable();

            if (this.data("editable")) {
              contextMenu(
                this,
                textInputRef.current,
                setCurrentTextUpdating,
                setEditing
              );
            } else {
              contextMenu(this);
            }
          });

          setSvgFn(draw);
        }
      } else {
        if (!canvasEl.querySelector("svg")) {
          // Initialize SVG.js
          const draw = SVG().addTo(canvasRef.current).size("100%", "100%");

          // Share draw variable on setSvgFn useCanvasContext's data value
          setSvgFn(draw);
        }
      }
    }

    // If canvasEl exits
    /*   if (canvasEl) {
      // If canvasEl has no SVG else use saved data
      if (!canvasEl.querySelector("svg")) {
        // Initialize SVG.js
        const draw = SVG().addTo(canvasRef.current).size("100%", "100%");

        // Share draw variable on setSvgFn useCanvasContext's data value
        setSvgFn(draw);
      } else {
        const localStorageVal = localStorage.getItem("causalGraph");

        if (localStorageVal !== null) {
          const svgItems = parse(localStorageVal);

          console.log(svgItems);
        }
      }
    } */
  }, [canvasRef, setSvgFn]);

  return (
    <section id="toolBox" className="w-1/5 border-r border-gray-200 p-4">
      <h2 className="text-sky-500 mb-8 font-bold">Causal Graph Tool Box</h2>
      <div className="grid grid-rows-1 gap-8">
        <NodesContainer />
        <EdgesContainer />
        <CommentInputSection />
      </div>
    </section>
  );
};

export default ToolBox;
