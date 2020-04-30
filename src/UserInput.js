import React, { Component } from 'react';


const userInput = (props) =>{
    const style = {
        backgroundColor:"red",
        margin: "20px solid red",
        border: "10px"
      }
    return (
        <div>
            <input 
            type ="text" 
            onChange = {props.changed} 
            value={props.name} 
            style={style}/>
        </div>    )
};

export default userInput