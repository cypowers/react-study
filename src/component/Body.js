import "./Body.css";
import React, { useState } from 'react';

function Body() {

    const [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: ""
    });
    
    const handleOnChange = (e) => {
        console.log("현재 수정 대상: ", e.target.name, "값: ", e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="body">
            <div><input name="name" value={state.name} onChange={handleOnChange} placeholder="이름"/></div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option value=""></option>
                    <option value={"남성"}>남성1</option>
                    <option value={"여성"}>여성2</option>
                </select>
            </div>
            <div>
                <input name="birth" type="date" value={state.brirth} onChange={handleOnChange} placeholder="생일"/>
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange}></textarea>
            </div>
        </div>
            
    );
}


export default Body;