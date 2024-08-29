import React from "react"

/*
Props:
- digitNum: the digit that is associated with this component (includes the decimal . as well)
- digitId: the text version of the digitNum. Ex: one
*/
export default function Digit(props) {
    return (
        <div className = {`${props.colSpace}`}>
            <button id = {props.digitId} 
            className = "digitButton" 
            value = {props.digitNum}
            onClick = {(event) => {
                props.updateText(event, false);
            }}
            >
                {props.digitNum}
            </button>
        </div>
    )
}