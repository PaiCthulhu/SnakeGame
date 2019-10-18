import React from "react";
import Screen from "./Screen";
import Snake from "./Snake";
import Food from "./Food";
import Direction from "./Direction";

const config = {
    DotSize: 20,
    Speed: 200,
    Screen: {
        Width: 600,
        Height: 400,
        BackgroundColor: "#FFF",
        BorderColor: "#000000"
    },
    Snake: {
        direction: Direction.Right,
        dots: [[1,0], [0,0]],
        Color: "#000"
    },
    Food: {
        Color: "#F00"
    },
    play: true
};

class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = config;
        this.state.Food.pos = this.randomPos();
    }

    componentDidMount() {
        setInterval(this.nextTurn.bind(this), this.state.Speed);
        document.onkeydown = this.onKeyDown.bind(this);
    }

    componentDidUpdate() {
        if(this.state.play)
            this.update();
    }

    init(config){
        this.setState(config);
        this.state.Food.pos = this.randomPos();
    }

    update(){
        console.log("update");
        const borderCheck = ()=>{
            let head = this.state.Snake.dots[this.state.Snake.dots.length - 1];
            let grid = this.grid();
            console.log("alo");
            if (head[0] >= grid[0] || head[1] >= grid[1] || head[0] < 0 || head[1] < 0) {
                this.end();
            }
        };
        borderCheck();
        //      this.checkIfOutOfBorders();
        //     this.checkIfCollapsed();
        //     this.checkIfEat();
    }

    nextTurn(){
        let sneak = {...this.state.Snake};
        sneak.dots = Snake.Move(this.state.Snake.dots, this.state.Snake.direction);
        this.setState({Snake:sneak})
    }

    end(){
        this.setState({play:false});
        alert(`Fim de Jogo! Pontuação: ${(this.state.Snake.dots.length)-2}`);
        this.init(config);
    }

    grid(){
        const gridify = (width, height, size)=>{return [width/size, height/size]};
        return gridify(this.state.Screen.Width, this.state.Screen.Height, this.state.DotSize)
    }

    randomPos(){
        const calcRandom = (min, max)=>{
            return Math.floor((Math.random()*(max-min+1)+min)/2)*2
        };

        let [maxX,maxY] = this.grid();
        return [calcRandom(1,maxX-1), calcRandom(1,maxY-1)];
    }

    increaseSpeed(){
        if(this.state.Speed > 10)
            this.setState({Speed: this.state.Speed - 10});
    }

    onKeyDown(e){
        e = e || window.event;
        let sneak = {...this.state.Snake};
        switch (e.keyCode) {
            case 38:
                sneak.direction = Direction.Up;
                break;
            case 40:
                sneak.direction = Direction.Down;
                break;
            case 37:
                sneak.direction = Direction.Left;
                break;
            case 39:
                sneak.direction = Direction.Right;
                break;
        }
        this.setState({Snake:sneak})
    }

    render() {
        return (
            <Screen {...this.state.Screen} DotSize={this.state.DotSize}>
                <Snake {...this.state.Snake} DotSize={this.state.DotSize} Screen={this.state.Screen}/>
                <Food {...this.state.Food} DotSize={this.state.DotSize} Screen={this.state.Screen} />
            </Screen>
        );
    }

}

export default Game;
