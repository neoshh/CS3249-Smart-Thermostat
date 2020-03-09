import React from "react";

function Slider(props) {

//     var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

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
