import React from "react";

export default function backCard(props) {
  const { hog } = props;
  return (
    <div>
      <h3>Name: {hog.name}</h3>
      <h4>specialty: {hog.specialty}</h4>
      <h4>greased: {`${hog.greased}`}</h4>
      <h4>weight: {hog.weight}</h4>
      <h4>highest medal achieved: {hog["highest medal achieved"]}</h4>
    </div>
  );
}
