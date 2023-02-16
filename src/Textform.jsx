import React from 'react'

const textform = (props) => {
  return (
    <>
      <div className="mb-3 container my-5" style={{color:props.tcol}}>
        <h2 className={`text-${props.tcol}`}>Enter the text to analyze below</h2>
        <textarea
          className={`form-control bg-${props.bc} text-${props.tcol}`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={props.text}
          onChange={props.handleonchange}
          placeholder="Enter your text"
        >{props.text}</textarea>
        <div>
        <button type="button" onClick={props.ctl} className="btn btn-primary my-2">Convert to lowercase</button>
        <button type="button" onClick={props.ctu} className="btn btn-primary my-2 mx-1">Convert to uppercase</button>
        <button type="button" onClick={props.copyt} className="btn btn-primary my-2 mx-1">Copy text</button>
        <button type="button" onClick={props.res} className="btn btn-primary my-2 mx-1">Remove extra spaces</button>
        <button type="button" onClick={props.ct} className="btn btn-primary my-2 mx-1">Clear text</button>
        </div>

        <div className={`text-${props.tcol}`}>{(props.text===""|| props.text.charAt(props.text.length-1)===" ")?props.text.split(" ").length-1:props.text.split(" ").length} words and {props.text.length} characters</div>
        <h2 className={`text-${props.tcol}`}>Preview</h2>
        <p className={`text-${props.tcol}`}>{props.text.length>0?props.text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}

export default textform
