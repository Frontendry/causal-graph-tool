// Flatted
import { stringify } from "flatted";

// Components
import ToolIcon from "../../general-elements/tools/toolIcon";

// Context Store
import { useCanvasContext } from "../../../context/canvasContextStore";

const Save = () => {
  const { svgFn } = useCanvasContext();

  const saveProject = () => {
    const currentSvg = svgFn;

    const currentSvgChildren = currentSvg.svg(false);

    console.log(currentSvgChildren);

    const svgJsonString = stringify(currentSvgChildren);

    // Add to Localstorage
    localStorage.setItem("causalGraph", svgJsonString);

    /* svgChildren.each(function (i, children) {
      childrenCollection.push(this.instance);
      //console.log(childrenCollection);
    }); */

    //const svgChildrenJsonString = stringify(childrenCollection);

    // localStorage.setItem("causalGraph", svgChildrenJsonString);

    /*    //Creates a temporary div and append the SVG to it, this is not visible to the user
    var tempDiv = document.createElement("div");
    tempDiv.appendChild(svgChildren.node);

    //Gets the svg as a string
    var svgText = tempDiv.innerHTML;

    //Create the JSON string
    var jsonString = JSON.stringify(svgText); */

    /*  console.log(svgChildren.node);

    const svgChildrenJsonString = stringify(svgChildren.node); */

    // Add to Localstorage
    // localStorage.setItem("causalGraph", jsonString);
  };
  return (
    <div className="absolute top-0 right-0 mt-3 mr-3">
      <ToolIcon title="Save Project" iconClass="bi-hdd" onClick={saveProject} />
    </div>
  );
};

export default Save;
