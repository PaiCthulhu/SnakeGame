import React from "react";
import Dot from "./Dot";
import Direction from "./Direction";

class Snake extends React.Component{
    static Move = (dots, direction)=>{
        let head = dots[dots.length - 1];
        switch(direction){
            case Direction.Right:
                head = [head[0]+1, head[1]];
                break;
            case Direction.Left:
                head = [head[0]-1, head[1]];
                break;
            case Direction.Down:
                head = [head[0], head[1]+1];
                break;
            case Direction.Up:
                head = [head[0], head[1]-1];
                break;
        }
        dots.push(head);
        dots.shift();
        return dots;
    };

    render() {
        return (
            <div className={"Snake"}>
                {this.props.dots.map((dot, key)=>{
                    return (
                        <Dot
                            className={"Snake-Dot"}
                            position={dot}
                            key={key}
                            DotSize={this.props.DotSize}
                            Screen={this.props.Screen}
                            style={{
                                backgroundColor: this.props.Color,
                            }}
                        />
                    );
                })}
            </div>
        );
    }

}

export default Snake;