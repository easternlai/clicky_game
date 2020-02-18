import React from "react";

function Scoreboard(props){
return <div><span>Score: {props.userScore}</span> <span>   High Score: {props.highScore}</span></div>;
}

export default Scoreboard;