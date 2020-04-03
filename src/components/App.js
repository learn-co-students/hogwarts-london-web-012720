import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./hogList";
import Sort from "./sort";

class App extends Component {
  state = {
    filter: false,
    sort: "name"
  };
  render() {
    const sort = hogs.map(hog => hog.name).sort();
    console.log(hogs.filter(hog => hog.name === sort));

    const sortedHogs = hogs.sort((a, b) => {
      let comparison = 0;
      a = a[this.state.sort];
      b = b[this.state.sort];
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
      return comparison;
    });

    return (
      <div className="App">
        <Nav filter={this.state.filter} handleClick={this.handleClick} />
        <Sort sort={this.state.sort} sortChange={this.handleSort} />
        <HogList hogs={sortedHogs} filter={this.state.filter} />
      </div>
    );
  }
  handleClick = () => {
    this.setState({ filter: !this.state.filter });
  };

  handleSort = () => {
    if (this.state.sort === "name") {
      this.setState({ sort: "weight" });
      console.log(this.state);
    } else {
      this.setState({ sort: "name" });
      console.log(this.state);
    }
  };
}
export default App;
