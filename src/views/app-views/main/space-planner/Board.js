import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableBoardItem from './DraggableBoardItem';
import objectList from "./objectListData";

const Board = ({ boardItems, setBoardItems  }) => {
    const boardRef = React.useRef(null);

    const moveItem = (uid, offset) => {
        if (!offset) return;
        setBoardItems((prevItems) =>
            prevItems.map((item) =>
                item.uid === uid ? { ...item, left: offset.x, top: offset.y } : item
            )
        );
    };

    const deleteItem = (uid) => {
        setBoardItems((prevItems) => prevItems.filter((item) => item.uid !== uid));
    };
    
    const [{ isOver }, drop] = useDrop({
        accept: 'OBJECT',
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            const boardRect = boardRef.current.getBoundingClientRect();

            const x = offset.x - boardRect.left - 50/2;
            const y = offset.y - boardRect.top - 50/2;

            const object = objectList.find((o) => o.id === item.id);
            if (!object) return;

            const objectWithUid = {
                ...object,
                uid: item.uid || `uid-${Date.now()}-${Math.random()}`,
            };

            const existingItem = boardItems.find((boardItem) => boardItem.uid === objectWithUid.uid);
            if (existingItem) {
                moveItem(objectWithUid.uid, { x, y });
            } else {
                setBoardItems((prevItems) => [
                    ...prevItems,
                    {
                        uid: objectWithUid.uid,
                        id: objectWithUid.id,
                        left: x,
                        top: y,
                        image: objectWithUid.image,
                        name: objectWithUid.name,
                    }
                ]);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div style={{ width: "100%", border: "1px solid black", padding: 10 }}>
            <div style={{ padding: "5px 0 10px" }}>Схема помещения:</div>
            <div
                ref={(node) => {
                    boardRef.current = node;
                    drop(node);
                }}
                style={{
                    position: "relative",
                    width: "100%",
                    height: 400,
                    border: "1px dashed black",
                    backgroundColor: isOver ? "lightgray" : "white",
                    overflow: "hidden",
                }}
            >
                {boardItems.map((item) => (
                    <DraggableBoardItem 
                        key={item.uid} 
                        item={item}
                        moveItem={moveItem}
                        deleteItem={deleteItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
