import React from "react"

export default function Display(props) {
    return (
        <div className = "container screen-container">
            <div className = "row" id = "equationScreen">
                <p>{props.equationText}</p>
            </div>
            <div className = "row" id = "display">
                <p>{props.resultText}</p>
            </div>
        </div>
    )
}