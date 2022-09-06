// React ID Generator
import nextId from "react-id-generator";

// Context Store
import { useCanvasContext } from "../../../../context/canvasContextStore";

// Context Menu
import contextMenu from "../../../../utils/contextMenu";

// Tool Icons Template
import ToolIcon from "../toolIcon";

const DownRightArrow = () => {
  const { setSvgFn } = useCanvasContext();

  const addEdge = () => {
    // Initialize Unique IDs
    const textSvgId = nextId();

    setSvgFn((current) => {
      const arrowGroup = current.group();

      // Add SVG Group with unique ID and some attributes to main SVG 'Canvas'
      arrowGroup.attr({
        id: `svgDownRightArrow${textSvgId}`,
        class: "causal-graph-component",
      });

      const arrowBody = arrowGroup
        .line(0, 0, 150, 150)
        .stroke({ color: "#f06", width: 3, linecap: "round" })
        .attr({
          class: "arrow-body-svg",
        });

      arrowBody.marker("end", 5, 3, function (add) {
        add.polygon("0 0, 5 1.5, 0 3").fill("#f06");
      });

      const groupList = current.node.instance.find(
        `#svgDownRightArrow${textSvgId}`
      );

      // Resolve double group insertion bug
      if (groupList.length > 1) {
        const lastEl = groupList[groupList.length - 1];
        lastEl.remove();
      }

      arrowGroup.translate(20, 20);

      arrowGroup.draggable();

      // Context Menu Creation
      contextMenu(arrowGroup);

      return current;
    });
  };

  return (
    <ToolIcon
      title="Add Down Right Arrow"
      iconClass="bi-arrow-down-right"
      onClick={addEdge}
    />
  );
};

export default DownRightArrow;
