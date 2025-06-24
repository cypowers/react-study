import "./Body.css";
import React, { useState } from 'react';

function Viewer() {
    console.log("viewer updated")
    return <div>Viewer</div>;
}

function Body() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }   

    return (
        <div className="body">
            <h2>{number}</h2>
            <Viewer />
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
            
    );
}


export default Body;