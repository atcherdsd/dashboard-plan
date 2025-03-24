import React from 'react';
import { useDrag } from 'react-dnd';
import objectList from "./objectListData";

const DraggableItem = ({ object }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: 'OBJECT', id: object.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
  
    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab' }}>
            <img src={object.image} alt={object.name} width="50" />
        </div>
    );
};

const ObjectList = () => {
    return (
        <div style={{ 
            border: "1px solid black", 
            padding: "10px", 
            display: 'flex', 
            gap: '10px',
            flexDirection: 'column',
            flexShrink: '0'
        }}>
            <h3>Выберите объект</h3>
            {objectList.map((object) => (
                <div 
                    key={object.id} 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px' 
                    }}
                >
                    <DraggableItem key={object.id} object={object} />
                    <span>{object.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ObjectList;
