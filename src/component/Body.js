import "./Body.css";

function Body() {
    function handleClick(e){
        console.log(e);
        console.log("버튼이 클릭되었습니다.", e.target.name);
    };

    return (
        <div className="body">
            <button onClick={handleClick} name="A Btn">Click Here1</button>
            <button onClick={handleClick} name="B Btn">Click Here2</button>
        </div>
            
    );
}


export default Body;