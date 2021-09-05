import React, { useState } from 'react'


export default function TextForm(props) {


    const extractEmails= ()=>{
 const newtext=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) 
 console.log(newtext)
 const alert1 = document.getElementById('maz') 
 if (newtext==null) {  
    alert1.innerHTML=  `<div class="alert alert-danger" role="alert">
    no email found!
  </div>`
  
    setText("no email found please refresh and try again")
    
}else{
    alert1.innerHTML=  `<div class="alert alert-dark" role="alert">${newtext}</div> `}

  setTimeout((newText) => {
      if (newText==null) {

        alert1.innerHTML= " "   
      }
      
  }, 3000);

 
}
    // to copy text
    const copyText=()=>{
        var text ;
      text=document.getElementById('myarea')
      text.select()
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied!", "success")

    }   /* Copy the text inside the text field */
  
     
//$("#emails").text(extractEmails(text).join('\n'));
    const handleOnClick=()=>{
        console.log()
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowerCase=()=>{
        console.log()
        setText(text.toLowerCase())
        props.showAlert("Converted to lowerCase!", "success");
    }
    const handleOnChange=(event)=>{
        console.log("onchange fired")
        setText(event.target.value)

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    const [text, setText] = useState("enter your number");

    return (
        <>
        
     

<div className="container " style={{color: props.mode==='dark'?'white':'#042743'}} >
    <div className="maz" id="maz"></div>
    <h1 className="my-3" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}>   {props.heading}</h1>
<div className="my-5">
  
  <textarea className="form-control" id="myarea" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" style={props.style} onClick={handleOnClick}>convert to uppercase</button>
<button className="btn btn-primary" style={props.style} onClick={handleLowerCase}>convert to lowercase</button>
<button className="btn btn-primary mbutton mx-2" style={props.style} onClick={extractEmails}>Extract Emails</button>
<button className="btn btn-primary mbutton mx-2" style={props.style} onClick={copyText}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" style={props.style}  onClick={handleExtraSpaces} >Remove Extra Spaces</button>
</div>
{ <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div> }




  

    </>        
      
    )
}


