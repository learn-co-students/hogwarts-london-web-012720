import React from 'react'
import HogCard from './HogCard'

const HogList = ({hogs}) => {
return (
    <div className="ui three stackable cards">
        {hogs.map (hog => (
            <HogCard hog={hog} key={hog.name} />
        ))}
    </div>
)

}

export default HogList