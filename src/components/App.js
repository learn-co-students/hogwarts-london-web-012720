import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from './hogList'
import hogs from "../porkers_data";
import HogFilter from './HogFilter'

class App extends Component {
  constructor() {
    super() 

    this.state = {
        weight: null,
        sorted: true,
        greased: false
    }
  }

  isHogGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
  }
  sortHogs(hogsToSort, property) {
    return hogsToSort.sort((a, b) => a[property]> b[property] ? 1 : -1)
  }

  sortBy = () => {
    this.setState({
      sorted: !this.state.sorted
    })
  }

  render() {
    let filterHog = this.state.greased ? hogs.filter(hog => hog.greased) : hogs
    filterHog = this.state.sorted ? this.sortHogs(filterHog, "name") : this.sortHogs(filterHog, "weight")


    return (
      <div className="App">
        <Nav />
        <HogFilter isHogGreased={this.isHogGreased} trueOrFalse={this.state.greased} sortBy={this.sortBy} sorted={this.state.sorted}/>
        < HogList hogs={filterHog}/>
      </div>
    );
  }
}

export default App;
