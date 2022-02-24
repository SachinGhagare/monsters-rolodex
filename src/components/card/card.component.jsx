import React from "react";
import './card.styles.css'

export const Card = (props) => {
    // console.log(props.monster.id+6)
    return (
        
        <div className="card-container">
            <img alt="monsterName" src={`https://robohash.org/${props.monster.id+6}/set=set3&size=1*1`} />
            <h1 className="card-monsterNames"> {props.monster.name}</h1>
            <p className="email">{props.monster.email}</p>
        </div>
    )
}