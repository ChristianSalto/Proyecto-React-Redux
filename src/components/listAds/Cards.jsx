import React from 'react';
import './Cards.css'

function Cards(props) {
    return (
        <div className="div-container-card">
            {props.data.map((ads) => {
                console.log(ads);
                return (
                    <div className="div-cards">
                        <header className="headers-cards">{ads.name}</header>
                        <p>{ads.description}</p>
                        <span>{ads.price}$</span>
                        <button>{ads.type}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards