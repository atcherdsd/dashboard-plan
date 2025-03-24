import React from 'react';

const SaveButton = ({ boardItems }) => {
    const saveLayout = () => {
        const data = JSON.stringify(boardItems);
        const blob = new Blob([data], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'layout.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <button className={'space-planner-save-button'} onClick={saveLayout}>Сохранить расстановку</button>;
};

export default SaveButton;
