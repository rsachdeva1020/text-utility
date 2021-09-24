import React, {useState} from 'react'

export default function TextForm(props) {
    function handleUpClick(e){
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
    
    function copyToClipBoard(){
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    }

    function handleExtraSpaces(){
        let newText = text.split(/[ ]+/); //regex
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    function handleCapitalise(){
        let newText = text.split(" ");
        newText = newText.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
        setText(newText.join(" "));
        props.showAlert("Text Capitalised", "success")
    }
    function handleFrequency(){
        for(let i = 0;i<text.length;i++)
            if((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) 
                counts[text[i]] = counts[text[i]] ? counts[text[i]] + 1 : 1
        keys = Object.keys(counts)

        let a = keys.map((key, index) => key + " - " + counts[key])

        let newText = a.join(", ");

        setFrequency(newText)
        // console.log(newText)
    }

    function handleOnChange(e){
        setText(e.target.value)
    }
    
    let keys, counts = {};
    const [text, setText] = useState('');
    const [frequency, setFrequency] = useState("")

    return (
    <>
    <div>
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
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalise}>Capitalise Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleFrequency}>Frequency</button>
        </div>
        <div className="container my-4" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2> Your Text Summary</h2>
            <p>{text.split(/\s+/).filter(ele => ele.length !== 0).length} words and {text.length} characters</p>
            <p>{(0.008 * text.split(" ").filter(ele => ele.length !== 0).length).toFixed(3)} Minutes read</p>
            {/*frequency*/}

            {//<h3>Preview</h3>
            // <pre>{text.length > 0 ? text : "Enter some text above to preview here"} </pre>
            }
        </div>
    </div>
    </>
    )
}
