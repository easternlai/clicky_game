import React from "react";
import "./style.css";

function Image(props){
    return(
        <div>
            <img onClick={()=>props.checkGame(props.id)} src={props.img}>
            </img>
        </div>
    );
}

export default Image;