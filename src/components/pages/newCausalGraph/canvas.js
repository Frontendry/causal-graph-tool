/**
 * --------------------------------------------------------------------------
 * Component to hold canvas for SVG manipulation
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

// Context Store
import { useCanvasContext } from "../../../context/canvasContextStore";
import Save from "./save";

const Canvas = () => {
  // Get canvasRef and reference the canvas HTML Element below
  const { canvasRef } = useCanvasContext();

  return (
    <section id="canvas" className="w-4/5 reletive" ref={canvasRef}>
      <Save />
    </section>
  );
};

export default Canvas;
