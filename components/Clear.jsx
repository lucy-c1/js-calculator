import React from "react"

export default function Clear(props) {
    return (
        <div className = "col-6">
            <button id = "clear" value = "0" onClick = {props.handleClear}>
                AC
            </button>
        </div>
    )
}