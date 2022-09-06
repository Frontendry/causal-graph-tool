// React ID Generator
import nextId from "react-id-generator";

// Context Store
import { useCanvasContext } from "../../../../context/canvasContextStore";

// Context Menu
import contextMenu from "../../../../utils/contextMenu";

// Tool Icons Template
import ToolIcon from "../toolIcon";

const Node = () => {
  const { setSvgFn } = useCanvasContext();

  const addNode = () => {
    // Initialize Unique IDs
    const textSvgId = nextId();

    setSvgFn((current) => {
      const nodeGroup = current.group();

      // Add SVG Group with unique ID and some attributes to main SVG 'Canvas'
      nodeGroup.attr({
        id: `svgNode${textSvgId}`,
        class: "causal-graph-component",
      });

      // Node Group Shape
      nodeGroup.ellipse(200, 100).fill("#fecaca");

      const groupList = current.node.instance.find(`#svgNode${textSvgId}`);
      // Resolve double group insertion bug
      if (groupList.length > 1) {
        const lastEl = groupList[groupList.length - 1];
        lastEl.remove();
      }

      nodeGroup.translate(150, 50);

      nodeGroup.draggable();

      // Context Menu Creation
      contextMenu(nodeGroup);

      return current;
    });
  };

  return <ToolIcon title="Add Node" iconClass="bi-chat" onClick={addNode} />;
};

export default Node;
