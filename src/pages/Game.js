import React, { Component } from "react";
import objects from "./objects.json";
import Wrapper from "../components/Wrapper";
import Image from "../components/Image";
import Scoreboard from"../components/Scoreboard";
import "./style.css"

var message = "";

class Game extends Component {
    state = {
        userScore: 0,
        highScore: 0,
        objects
    };


    checkGame = id => {
        
        if( this.state.userScore === 0){
            message = "Start Game!";
        }
        this.state.objects.forEach(element => {
            //function to shuffle array

            if(element.id===id){
                if(!element.selected){
                    message = "Correct!";
                    element.selected=true;
                    this.setState({userScore: this.state.userScore+1});
                    
                }else{
                    message = "Game over.  Try Again!";
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
                        message={message}
            />
            <div className="row">
                {this.state.objects.map(object => (
                    <div className="col-lg-4 d-flex justify-content-center">
                    <Image 
                        id={object.id}
                        img={object.img}
                        checkGame={this.checkGame}
                        selected={object.selected}

                    />
                    </div>
                ))}
            </div>
        </Wrapper>
        );
    }
}

export default Game;