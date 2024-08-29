import React from "react"

/*
Props:
- operation: the operation that is associated with this component
- operationId: the text version of the operation. Ex: multiply
*/
export default function Operation(props) {
    return (
        <div>
            <button id = {props.operationId}>{props.operation}</button>
        </div>
    )
}