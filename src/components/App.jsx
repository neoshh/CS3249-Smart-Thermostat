import React from "react";
import Thermostat from "./Thermostat";
import Slider from "./Slider"
import temperatures from "../temperatures"

function App() {

    const [initalTargetTemp, initalCurrentTemp] = temperatures;

    const [targetTemp, setTargetTemp] = React.useState(initalTargetTemp);
    const [currentTemp, setCurrentTemp] = React.useState(initalCurrentTemp);
    const [tempColor, setTempColor] = React.useState({fill: "#6D6D6D",
        "-webkit-transition": "fill 1000ms linear",
        "-ms-transition": "fill 1000ms linear",
        "transition": "fill 1000ms linear"
    });

    const timerID = React.useRef()
    React.useEffect(() => {
        if (targetTemp > currentTemp) {
            setTempColor({fill: "#FF7878", "-webkit-transition": "fill 1000ms linear",
            "-ms-transition": "fill 1000ms linear",
            "transition": "fill 1000ms linear"});
            timerID.current = setInterval(() => {
                if (currentTemp + 1 > targetTemp) {
                  setCurrentTemp(targetTemp)
                } else {
                  setCurrentTemp(currentTemp + 1)
                }
              }, 200)
        } else if (targetTemp < currentTemp) {
            setTempColor({fill: "#7ea9e1", "-webkit-transition": "fill 1000ms linear",
            "-ms-transition": "fill 1000ms linear",
            "transition": "fill 1000ms linear"});
            timerID.current = setInterval(() => {
                if (currentTemp - 1 < targetTemp) {
                  setCurrentTemp(targetTemp)
                } else {
                  setCurrentTemp(currentTemp - 1)
                }
              }, 200)
        } else {
            setTempColor({fill: "#6D6D6D", "-webkit-transition": "fill 1000ms linear",
            "-ms-transition": "fill 1000ms linear",
            "transition": "fill 1000ms linear"});
        }
        return () => clearInterval(timerID.current);
      }, [currentTemp, targetTemp])

    function targetTempChange(event) {
        const newTemp = parseInt(event.target.value);
        setTargetTemp(newTemp);
    }

    function currentTempChange(event) {
        const newTemp = parseInt(event.target.value);
        setCurrentTemp(newTemp);
    }

    return (
        <div>
            <Thermostat
                size={250}
                targetTemp={targetTemp}
                currentTemp={currentTemp}
                strokeWidth={15}
                firstCircleStroke={"#6D6D6D"}
                secondCircleStroke={"#CBCBCB"}
                thermostatColor={tempColor}
            />
            <div>
                <Slider label="Set Target Temperature" value={targetTemp} onchange={targetTempChange}/>
                <Slider label="Set Current Temperature" value={currentTemp} onchange={currentTempChange}/>
            </div>
        </div>
    )
}

export default App;
