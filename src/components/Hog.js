import React from 'react';

// doesnt have to be a class as it is purely presentational, ie doesnt need any functions

// const Hog = (props) => {
//     const {name, image} = props
// }

// above and below the same

// const Hog = ({name, image}) => {
// }

const Hog = ({name, image, selectHog, hog}) => {
    return(
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <br></br>
            <button onClick={() => selectHog(hog)}>Show More</button>
        </div>
    )
}

export default Hog