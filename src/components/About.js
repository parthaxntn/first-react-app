import React, { useState } from 'react'

export default function About(props) {

    const [mystyle, setMyStyle] = useState(
      {
          backgroundColor:"white",
          color:"black"
      }
    )

    const [btntext,setBtntext] = useState("Enable Dark Mode")

    
    let  toggleStyle  = () => {
        if (mystyle.color === "white"){
          setBtntext("Enable Dark Mode")
          setMyStyle(
            {
              backgroundColor:"white",
              color:"black"
            }
            )
            props.showalert("Dark mode disabled","success")
            document.title = `Textutils-Light mode`
          }
          else{
            setBtntext("Disable Dark Mode")
            setMyStyle(
              {
                backgroundColor:"grey",
                color:"white"
              }
              )
              props.showalert("Dark mode enabled","success")
            }
          }
          
          function changeStyle(color, name){
            setMyStyle(
              {
                backgroundColor: color,
                color:"white"
              }
              )
              props.showalert(name +" has been set","success")
              setBtntext("Disable Dark Mode")
            }
            
            

  return (
    <div className="container" style={mystyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button className="btn btn-primary m-3" onClick={toggleStyle}>{btntext}</button>
  <button className="btn btn-success m-3 color-disc " onClick={() => {changeStyle("#003900","green")}}></button>
  <button className="btn btn-danger m-3 color-disc " onClick={() => {changeStyle("rgb(57, 0, 0)","red")}}></button>
  <button className="btn btn-warning m-3 color-disc " onClick={() => {changeStyle("rgb(57, 48, 0)","yellow")}}></button>
</div>
    </div>
  )
}
