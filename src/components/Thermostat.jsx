import React from "react";

function Thermostat(props) {
    
    const radius = props.size/2 - props.strokeWidth;
    const center = props.size/2;
    const circumference = Math.PI * 2 * radius;
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const tempOffset = circumference * ((100 - props.targetTemp)/100);
        setOffset(tempOffset);
    }, [setOffset, props.targetTemp, circumference, offset]);

    return (
        <div>
            <svg
            className="thermostat"
            width={props.size}
            height={props.size}
            >
                <circle 
                    className="radial-bg"
                    stroke={props.firstCircleStroke}
                    r={radius}
                    cy={center}
                    cx={center}
                    strokeWidth={props.strokeWidth}
                />
                <circle
                    className="radial"
                    style={props.thermostatColor}
                    stroke={props.secondCircleStroke}
                    r={radius}
                    cy={center}
                    cx={center}
                    strokeWidth={props.strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text
                    x={center}
                    y={center}
                >
                    <tspan 
                        className="target-temperature"
                        x={center}
                        dy="0.1em"
                    >
                        {props.targetTemp}°
                    </tspan>
                    <tspan 
                        className="current-temperature"
                        x={center}
                        dy="1.8em"
                    >
                        Current {props.currentTemp}°
                    </tspan>
                </text>
            </svg>
        </div>
    );
}

export default Thermostat;
