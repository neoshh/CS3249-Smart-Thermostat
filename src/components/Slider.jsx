import React from "react";

function Slider(props) {

    return (
        <div className="slidecontainer">
            <p>{props.label}</p>
            <input 
                type="range" 
                min="0" max="100" 
                value={props.value}
                onChange={props.onchange}
                className="slider"
            ></input>
        </div>
    )
}

export default Slider;
