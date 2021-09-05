
import React, {useState} from "react";



export default function About() {
    const[color,setColor]=useState("Enable Dark Mode")
     
   const  [myStyle1,setStyle]=useState({ color:"black",
     backgroundColor:"white"})

    const mode=()=>{
        console.log("its working")
        if (myStyle1.color==="black") {
            setStyle({ color:"white",
            backgroundColor:"black"})
            setColor("enable light mode")
            
        } else {
            setStyle({ color:"black",
            backgroundColor:"white"})
            setColor("enable Dark mode")
            
        }

    }

  return (
    <div className="container  my-5"  style={myStyle1}>
      <div className="card text-center" style={myStyle1}>
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button type="button" className="btn btn-primary"  onClick={mode}>{color}</button>
        </div>
        <div className="card-footer text-muted"  style={myStyle1}></div>
      </div>
    </div>
  );
}
