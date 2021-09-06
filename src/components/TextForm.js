import React, {useState} from 'react'


export default function TextForm(props) {
    function handleUpClick(e){
        console.log("clicked")
        let newText = text.toUpperCase();
        // setText(e.target.value)
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    function handleLoClick(){
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success")
    }
    function handleClearClick(){
        setText('')
        props.showAlert("Text Cleared", "success")
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
        document.getSelection().removeAllRanges();      // not to select text
        props.showAlert("Copied to Clipboard", "success")
    }

    function handleExtraSpaces(){
        let newText = text.split(/[ ]+/); //regex
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }

    function handleOnChange(e){
        setText(e.target.value)
    }
    const [text, setText] = useState('');
    // setText("new text")
    return (
    <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <div className="mb-3">
                <h1 className="mb-20">{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? 'rgb(42 42 42 / 80%)' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={copyToClipBoard}>Copy to clipboard</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2> Your Text Summary</h2>
            <p>{text.split(" ").filter(ele => ele.length !== 0).length} words and {text.length} characters</p>
            <p>{(0.008 * text.split(" ").filter(ele => ele.length !== 0).length).toFixed(3)} Minutes read</p>
            <h3>Preview</h3>
            <pre>{text.length > 0 ? text : "Enter some text above to preview here"} </pre>
        </div>
    </>
    )
}
