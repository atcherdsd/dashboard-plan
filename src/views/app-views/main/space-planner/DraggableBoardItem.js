import React, { useState } from "react";
import { useDrag } from "react-dnd";

const DraggableBoardItem = ({ item, moveItem, deleteItem }) => {
    const [isHovered, setIsHovered] = useState(false);

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "OBJECT",
            uid: item.uid,
            id: item.id,
            image: item.image,
            name: item.name,
            left: item.left,
            top: item.top
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (draggedItem, monitor) => {
            const offset = monitor.getClientOffset();
            if (!offset) return;

            moveItem(draggedItem.uid, { x: offset.x - 25, y: offset.y - 25 });
        }
    });

    return (
        <div
            ref={drag}
            style={{
                position: "absolute",
                left: item.left,
                top: item.top,
                width: 50,
                cursor: "grab",
                opacity: isDragging ? 0.5 : 1,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
            {isHovered && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteItem(item.uid);
                    }}
                    style={{
                        position: "absolute",
                        top: -10,
                        right: -10,
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        border: "none",
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                X
                </button>
            )}
        </div>
    );
};

export default DraggableBoardItem;
