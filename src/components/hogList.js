// import React, { Component } from "react";

// export default class hogList extends Component {
//   render() {
//   return <div>{hog.map}</div>;
//   }

// }

import React from "react";
import HogCard from "./hogCard";

export default function hogList(props) {
  const hogs = props.filter
    ? props.hogs.filter(hog => hog.greased)
    : props.hogs;
  const hogCards = () => {
    return hogs.map(hog => (
      <HogCard
        className="ui eight wide column"
        hog={hog}
        key={`${hog.name}${hog.weight}`}
      />
    ));
  };
  return <div className="ui grid container">{hogCards()}</div>;
}
