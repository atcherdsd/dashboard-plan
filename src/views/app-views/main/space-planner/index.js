import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ObjectList from './ObjectList';
import Board from './Board';
import SaveButton from './SaveButton';
import ImportButton from './ImportButton';

const SpacePlanner = () => {
    const [boardItems, setBoardItems] = useState([]);

    return (
        <DndProvider backend={HTML5Backend}>
            <h1>2D Планировщик</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                <ObjectList />
                <Board boardItems={boardItems} setBoardItems={setBoardItems} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                <SaveButton boardItems={boardItems} />
                <ImportButton setBoardItems={setBoardItems} />
            </div>
        </DndProvider>
    );
}

export default SpacePlanner;
