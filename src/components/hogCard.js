import React, { Component } from "react";
import FrontCard from "./frontCard";
import BackCard from "./backCard";

export default class hogCard extends Component {
  state = { infoVisible: false };
  render() {
    return (
      <div
        className="pigTile"
        onClick={() => {
          this.setState({ infoVisible: !this.state.infoVisible });
        }}
      >
        {this.state.infoVisible ? (
          <BackCard hog={this.props.hog} />
        ) : (
          <FrontCard hog={this.props.hog} />
        )}
      </div>
    );
  }
}
