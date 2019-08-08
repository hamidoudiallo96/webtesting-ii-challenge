import React from 'react'

export default function Display(props) {
    const {balls,strikes} = props
    return (
        <div>
            <h1>Player At Bat:</h1>
            <div>
                <h2>Strikes: {strikes}</h2>
                <h2>Balls:  {balls}</h2>
                
            </div>
        </div>
    )
}
