import React from "react"

/*
Props:
- digitNum: the digit that is associated with this component (includes the decimal . as well)
- digitId: the text version of the digitNum. Ex: one
*/
export default function Digit(props) {
    return (
        <div>
            <button id = {props.digitId}>
                {props.digitNum}
            </button>
        </div>
    )
}