// ReactDOM.render(
//     React.createElement("input",
//         {
//             placeholder: "Help text",
//             onClick: () => console.log("Input clicked!"),
//             onMouseEnter: () => console.log("Mouse entered input!"),
//         }
//     ), document.getElementById("app")
// )

const inputClick = () => {
    console.log("Input clicked!");
}

const mouseOver = () => {
    console.log("Mouse entered input!");
}

const helpText = "Help text";

const elements = (
    <div>
        <h1>{helpText}</h1>
        <input 
            placeholder={helpText} 
            onClick={inputClick} 
            onMouseEnter={mouseOver} />
        <p>{helpText === "Help text" ? "This is the help text!" : "This is not the help text."}</p>
    </div>
);

const app = document.getElementById("app"); 

ReactDOM.render(elements, app);