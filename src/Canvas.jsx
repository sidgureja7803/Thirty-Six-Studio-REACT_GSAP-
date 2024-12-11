import { useEffect, useRef } from "react";
import canvasImages from "./CanvasImages"
function Canvas() {

    const [index, setIndex] = useState({value : 0});
    const canvasRef = useRef(null);

    useEffect(() => {
        

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasImages[0];

        img.onload = () => {

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);
        };
    });

  return <canavs ref={canvasRef} id ="canvas">Canvas</canavs>;
}

export default Canvas;
