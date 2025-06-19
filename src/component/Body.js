import "./Body.css";

function Body() {
    const numA = 1;
    const numB = 2
    const strA = "안녕";
    const strB = "리액트";
    const objA = { name: "홍길동" };
    return (
        <div className="body">
            <h1>Body Content</h1>
            <h2>Number: {numA + numB}</h2>
            <h2>{objA.name}</h2><h2>{strA + strB}</h2>
        </div>
    );
}   

export default Body;