// Context Store
import { useCanvasContext } from "../../../../context/canvasContextStore";

const TextInput = () => {
  const { textInputRef } = useCanvasContext();
  return (
    <textarea
      id="textInput"
      className="w-full h-28 border border-gray-200 mb-2"
      ref={textInputRef}
    ></textarea>
  );
};

export default TextInput;
