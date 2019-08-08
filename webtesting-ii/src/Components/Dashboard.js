import React from 'react'

export default function Dashboard(props) {
    const {handleBalls,handleStrikes} = props
    return (
        <div>
           <button onClick = {handleBalls}>Ball</button> 
           <button onClick = {handleStrikes}>Strike</button>
        </div>
    )
}
