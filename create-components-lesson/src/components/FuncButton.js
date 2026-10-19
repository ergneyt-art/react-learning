import React, { useEffect, useState } from 'react';


// React компонент объявлен как функция
const FuncButton = (props) => {
    const [click, setClick] = useState(0);

    useEffect(() => {
        document.title = `Button clicked ${click} times`;
    }, [click]);
    
    return (
        <button onClick={setClickHandler}>{props.text}</button>
    )

    function setClickHandler() {
        setClick(click + 1);
        console.log("Button clicked " + click + " times");
    }
}

// Установка значения по умолчанию для пропса text
FuncButton.defaultProps = {
    text: "Default Button Text"
}

export default FuncButton;