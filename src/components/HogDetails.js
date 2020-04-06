import React, { Component } from 'react'



const HogDetails = ({name, specialty, img, weight, highestMedal, viewAllHogs }) =>{


   return (
  
      <div>

       <h1>{name}</h1>
     
       <img src={img}/>  
       <h1>Specialty: {specialty}</h1>
   <h2>weight{weight}</h2>
   <h2>highest Medal: {highestMedal}</h2>
   <button onClick={() => viewAllHogs ()}>Back to all Hogs</button>
      </div>
    )

}

export default HogDetails