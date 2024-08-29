import React from "react"

export default function Submit(props) {
    return (
        <div className = "col submit-container">
            <button id = "equals" value = "=" onClick = {props.handleEquals}>=</button>
        </div>
    )
}