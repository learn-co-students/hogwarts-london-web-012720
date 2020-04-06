import React, { Component } from 'react'


const Tiles = ({name, img, selectedHog, hog}) =>{


  return(
    
    <div >
     <h1>{name}</h1> 
   <img  src={img} onClick={() => selectedHog(hog)}/>

    </div>

  )
}

export default Tiles