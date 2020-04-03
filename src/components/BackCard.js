import React from "react";

const BackCard = ({hog}) => {
    return (
        
            <div className= "content">
               <h3>{hog.name}</h3>
               <div className = "description">
                   <strong>{hog.greased ? 'greased' : 'nongressed'}</strong>
                   <p>Specialty: {hog.specialty}</p>
                   <p>Weight: {hog.weight}</p>
                   <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
               </div>
            </div>
        
         
    )
}

export default BackCard