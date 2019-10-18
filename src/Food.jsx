import React from "react";
import Dot from "./Dot";

export default (props)=>{
    return (
        <Dot
            className={"Food"}
            position={props.pos}
            DotSize={props.DotSize}
            Screen={props.Screen}
            style={{backgroundColor: props.Color}}
        />
    );
};