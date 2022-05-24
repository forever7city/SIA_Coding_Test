import React, { useState, useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [pos, setPos] = useState([]);
  const [isDraw, setIsDraw] = useState(false);

  function drawStart(e) {
    setIsDraw(true);
    setPos([
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop,
    ]);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
  }, []);

  function drawSquare(e) {
    if (!isDraw) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = "red";
    let currentX = e.clientX - canvasRef.current.offsetLeft;
    let currentY = e.clientY - canvasRef.current.offsetTop;
    ctx.strokeRect(pos[0], pos[1], currentX - pos[0], currentY - pos[1]);
  }

  function drawEnd() {
    setIsDraw(false);
  }

  return (
    <canvas
      ref={canvasRef}
      width={1400}
      height={976}
      onMouseDown={drawStart}
      onMouseMove={drawSquare}
      onMouseUp={drawEnd}
    />
  );
};

export default Canvas;
