import React, {useState} from 'react';
import Swal from "sweetalert2";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //extra functions
    //ex.1
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    //ex.2
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    //sweetalert function
    const  ShowAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image'
          });
    }

    //speak function
    const [text, setText] = useState('');
    const msg = new SpeechSynthesisUtterance()
    const speechHandler = (msg) => {
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
    
    return (
        <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces</h1>

        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        
        <button disabled={text.length===0} className='btn btn-warning mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-info mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

         
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={ShowAlert}>Show Alert</button>

        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={() => speechHandler(msg)}>Speak</button>  
    </div>
    <div className='container my-3' style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
    )
}

