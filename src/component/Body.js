import "./Body.css";
import React, { useState } from 'react';

function Body() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [option, setOption] = useState("");

    function handleIncClick(e){
        setCount(count + 1);
    };

    function handleOnChangeOption(e){
        setOption(e.target.value);
        console.log("입력값이 변경되었습니다.", e.target.value);
        
    }

    function handleOnChange(e){
        setText(e.target.value);
        console.log("입력값이 변경되었습니다.", e.target.value);
    }

    function handleClick(e){
        console.log(e);
        console.log("버튼이 클릭되었습니다.", e.target.name);
    };

    return (
        <div className="body">
            <h1>Count is {count}</h1>
            <p>
                <input type="date" placeholder="Type here..." onChange={handleOnChange} value={text}/>
            </p>
            <p>{text}</p>
            <button onClick={handleClick} name="A Btn">Click Here11</button>
            <button onClick={handleClick} name="B Btn">Click Here2</button>
            <button onClick={handleIncClick} >+</button>
            <select onChange={handleOnChangeOption} value={option}>
                <option key="">선택하세요</option>
                <option key={"apple"}>사과</option>
                <option key={"banana"}>바나나</option>
                <option key={"orange"}>오렌지</option>
            </select>
        </div>
            
    );
}


export default Body;