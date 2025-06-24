import "./Body.css";
import React, { useState } from 'react';

function Viewer({ number }) {
    return <div>{number %2 === 0? <h3>짝수</h3>: <h3>홀수</h3>}</div>;
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
            <Viewer number={number} />
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
            
    );
}


export default Body;