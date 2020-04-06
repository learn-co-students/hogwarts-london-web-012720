import React from 'react';

const HogDetails = ({name, image, speciality, weight, highestMedal, clearSelectedHog}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/> 
            <p>Speciality: {speciality}</p>
            <p>Weight: {weight}</p>
            <p>Highest medal achieved: {highestMedal}</p>
            <button onClick={clearSelectedHog}>Go Back</button>
        </div>
    )
}

export default HogDetails