import React, { Component } from "react";
import objects from "./objects.json";
import Wrapper from "../components/Wrapper";
import Image from "../components/Image";
import Scoreboard from"../components/Scoreboard";

class Game extends Component {
    state = {
        userScore: 0,
        highScore: 0,
        objects
    };

    checkGame = id => {
        this.state.objects.forEach(element => {
            //function to shuffle array

            if(element.id===id){
                if(!element.selected){
                    console.log("correct!");
                    element.selected=true;
                    this.setState({userScore: this.state.userScore+1});
                }else{
                    console.log("gameover");
                    console.log(this.state.highScore);
                    if(this.state.userScore > this.state.highScore){
                        this.state.highScore = this.state.userScore;
                    }
                    this.state.objects.forEach(element => element.selected=false);
                    this.setState({userScore: 0});
                }
            }
  
        });
        const shuffle = array => {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
          
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
            return array;
        }
        console.log(this.state.objects);
        this.state.objects = shuffle(this.state.objects);
    }

    render(){
        return (
        <Wrapper>
            <Scoreboard userScore={this.state.userScore}
                        highScore={this.state.highScore}
            />
            {this.state.objects.map(object => (
                <Image 
                    id={object.id}
                    img={object.img}
                    checkGame={this.checkGame}
                    selected={object.selected}

                />
            ))}
        </Wrapper>
        );
    }
}

export default Game;