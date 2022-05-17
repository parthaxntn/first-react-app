import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
   
    const handleDownClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }
    
    const handleToAscii = (sentences) => {
      // let words = sentences.split(" ");
      // for (let i = 0; i <= words.length; i++) {
      //   // const element = words[i];
      //   setText("")
      //   if (words[i] === words[i].split("").reverse().join("")) {
      //     setText(sentences + " " + words[i])
      //   }
        
      // }
    }

    const [text, setText] = useState('');
    // console.log(text)
    // setText('enter text here 2')
    // console.log(text)
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
  <div className="my-3 container">
      <textarea placeholder='Enter text here' type="password" value={text} onChange={handleOnChange} className="form-control" id="mybox" rows = "8"/>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
  <button className="btn btn-primary" onClick={handleToAscii(text)}>Convert to Ascii</button>
    </div>
    <div className="summary container my-6">
      <h1>Your Text Summary</h1>
      {text.split(" ").length} words and {text.length} characters
      <p>{(text.split(" ").length)/125} minutes to read</p>
      <p><h2>Preview</h2>
      <p>{text}</p>
      </p>
    </div>
    </>
  )
}
