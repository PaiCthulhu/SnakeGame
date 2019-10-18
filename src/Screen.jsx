import React from "react";

export default (props)=>{
    return (
        <div
            className={"Screen"}
            style={{
                width:props.Width,
                height:props.Height,
                backgroundColor: props.BackgroundColor,
                backgroundSize: props.DotSize+"px "+props.DotSize+"px",
                backgroundImage: "radial-gradient(circle, "+(props.BorderColor+"40")+" 1px, rgba(0, 0, 0, 0) 1px)",
                backgroundPosition: ((props.DotSize/2)+1)+"px "+((props.DotSize/2)+1)+"px",
                borderColor:props.BorderColor,
                borderStyle:"double",
                position:"relative"
            }}>
            {props.children}
        </div>
    );
};