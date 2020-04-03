import React from "react";

const HogFilter = (props) => {
    return (
        <div>
        <button onClick={props.isHogGreased}> {"Filter greased hogs:"} {`${props.trueOrFalse}`}</button>
        <button onClick={props.sortBy}>{ props.sorted ? "Sort Hogs by Weight" : "Sort Hogs by Name"}</button>
        </div>
    )


}

export default HogFilter 
