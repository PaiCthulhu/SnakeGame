import React from "react";

export default (props)=>{
    let addClass = (props.className != "")?" "+props.className:"";
    return (
        <div
            className={"Dot"+addClass}
            style={{
                width:props.DotSize,
                height:props.DotSize,
                borderColor: props.Screen.BackgroundColor,
                borderStyle: "solid",
                borderWidth: 1,
                position:"absolute",
                left: props.position[0]*props.DotSize,
                top: props.position[1]*props.DotSize,
                ...props.style
            }}
        />
    );
};