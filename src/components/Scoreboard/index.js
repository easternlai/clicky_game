import React from "react";
import "./style.css";

function Scoreboard(props){
return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <span>Score: {props.userScore}</span>
        </div>
        <div className="col-lg-4">
          <span>{props.message}</span>
        </div>
        <div className="col-lg-4">
          <span>High Score: {props.highScore}</span>
        </div>
      </div>
  </div>
</div>
);
}

export default Scoreboard;




