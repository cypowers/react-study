import "./Body.css";
import React, {useRef, useState } from 'react';

function Body() {

    const [text, setText] = useState("");
    const textRef = useRef();

    const hancleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnClick = () => {
        alert(text);
        textRef.current.value = "";
        textRef.current.focus();
    }
    
    return (
        <div className="body">
            <input ref={textRef} type="text" value={text} onChange={hancleOnChange} />
            <button onClick={handleOnClick}>작성완료</button>
            
        </div>
            
    );
}


export default Body;