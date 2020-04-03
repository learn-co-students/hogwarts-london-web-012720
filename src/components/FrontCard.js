import React from "react";

const FrontCard = (props) => {
    const imageName = props.hog.name.split(" ").join("_").toLowerCase()
    let pigPics = require(`../hog-imgs/${imageName}.jpg`)
    return (
        <div className="ui card eight wide column pigTile">
                <img src={pigPics}></img>
            <div className= "content">
               <h3>{props.hog.name}</h3>
            </div>
        </div>
         
    )
}

export default FrontCard