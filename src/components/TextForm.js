import React, {useState} from 'react'


export default function TextForm({heading}) {
    function handleUpClick(e){
        console.log("clicked")
        let newText = text.toUpperCase();
        // setText(e.target.value)
        setText(newText)
    }
    function handleLoClick(){
        setText(text.toLowerCase());
    }
    function handleClearClick(){
        setText('')
    }
    // function handleCapitalClick(){
    //     let temp = text;
    //     let newText = temp.split(" ");
    //     newText.forEach(text => text.charAt(0).toUpperCase() + text.slice(1))
    //     newText.join(" ")
    //     setText(newText);
    // }
    
    function copyToClipBoard(){
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    function handleExtraSpaces(){
        let newText = text.split(/[ ]+/); //regex
        setText(newText.join(" "))
    }

    function handleOnChange(e){
        setText(e.target.value)
    }
    const [text, setText] = useState('');
    // setText("new text")
    return (
    <>
        <div className="container">
            <div className="mb-3">
            <h1>{heading}</h1>
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={copyToClipBoard}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
            <h2> Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{(0.008 * text.length).toFixed(3)} Minutes read</p>
            <h3>Preview</h3>
            <p>{text} </p>
        </div>
    </>
    )
}
