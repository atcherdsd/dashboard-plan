import React from 'react';

const ImportButton = ({ setBoardItems }) => {
    const importLayout = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = JSON.parse(e.target.result);
            setBoardItems(data);
        };
        reader.readAsText(file);
    };

    return (
        <div style={{ alignSelf: "flex-end" }}>
            <input
                id="import-file"
                type="file" 
                accept=".json" 
                onChange={importLayout} 
                style={{ display: "none" }} 
            />
            <button className={'space-planner-import-button'} onClick={() => document.getElementById("import-file").click()}>
                📂 Импорт расстановки
            </button>
        </div>
    );
};

export default ImportButton;
