import React, { useState, useRef } from "react";

const DraggableItem = ({ object, moveItem, boardRef }) => {
  const itemRef = useRef(null);
  const [position, setPosition] = useState({ x: object.x, y: object.y });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);

    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      if (!isDragging || !boardRef.current) return;

      const boardRect = boardRef.current.getBoundingClientRect();
      let newX = e.clientX - startX;
      let newY = e.clientY - startY;

      newX = Math.max(0, Math.min(newX, boardRect.width - itemRef.current.offsetWidth));
      newY = Math.max(0, Math.min(newY, boardRect.height - itemRef.current.offsetHeight));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      moveItem(object.id, position); // Фиксируем позицию в state `Board`
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={itemRef}
      className="draggable-item"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      <img src={object.image} alt={object.name} width="50" />
    </div>
  );
};

export default DraggableItem;
