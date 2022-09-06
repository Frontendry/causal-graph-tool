/**
 * --------------------------------------------------------------------------
 * Container to hold Nodes ToolBox Section
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// React Modules
import React from "react";

// ToolBox Section Title
import ToolsSectionTitles from "../toolsSectionTitle";

// Node Shape
import Node from "./node";

const NodesContainer = () => {
  return (
    <div>
      <ToolsSectionTitles titleText="Nodes" />

      <div className="grid grid-flow-col auto-cols-max gap-1">
        <Node />
      </div>
    </div>
  );
};

export default NodesContainer;
