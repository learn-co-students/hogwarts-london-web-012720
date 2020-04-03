import React from "react";

export default function frontCard(props) {
  const imageName = props.hog.name
    .split(" ")
    .join("_")
    .toLowerCase();
  const pigPic = require(`../hog-imgs/${imageName}.jpg`);
  return (
    <div>
      <img src={pigPic} alt={`${props.hog.name}`}></img>
      <h3>{props.hog.name}</h3>
    </div>
  );
}
