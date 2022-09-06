// Context
import { CanvasContextProvider } from "../../../context/canvasContextStore";

//Sections
import Canvas from "./canvas";
import ToolBox from "./toolbox";

const NewCausalGraph = () => {
  return (
    <main className="min-h-screen flex">
      <CanvasContextProvider>
        <ToolBox />
        <Canvas />
      </CanvasContextProvider>
    </main>
  );
};

export default NewCausalGraph;
