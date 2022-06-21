import React from 'react'
import './StatsView.css'

const StatsView = ({ pokemon }) => {
    const {id, name, sprite, type, height, weight } = pokemon
    return (
        <section className="stats-view">
        <img src={sprite} className="sprite-image" alt="sprite"/>
        <div className="data-wrapper">
            <h1 className="data-name">ID: {id} {name}</h1>
            <p className="data-char">Type: {type} </p>
            <p className="data-char">Height: {height} </p>
            <p className="data-char">Weight: {weight} </p>
        </div>
    </section>
    )
}

export default StatsView