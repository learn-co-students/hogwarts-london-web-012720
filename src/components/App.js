import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from '../containers/HogList'
import HogDetails from './HogDetails'

class App extends Component {

  constructor(){
    super()
    this.state = {
      selectedHog: null,
      greasedHogsFilter: false,
      sortByName: true
    }
  }

  selectHog = hog => {
    this.setState({
      selectedHog: hog
    })
  }

  clearSelectedHog = () => {
    this.setState({
      selectedHog: null
    })
  }

  filterGreased = () => {
    this.setState({
      greasedHogsFilter: !this.state.greasedHogsFilter
    })
  }

  sortHogs(hogs, property){
    return hogs.sort((a, b ) => (a[property] > b[property]) ? 1 : -1)
  }

  toggleSort = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  getImg(hog){
    return `hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`
}

  render() {
    if (this.state.selectedHog) {
      return (
        <div className="App">
          <Nav />
          <HogDetails 
          name={this.state.selectedHog.name}
          image={this.getImg(this.state.selectedHog)}
          speciality={this.state.selectedHog.speciality}
          weight={this.state.selectedHog.weight}
          highestMedal={this.state.selectedHog['highest medal achieved']}
          clearSelectedHog={this.clearSelectedHog}
          />
        </div>
      );
    } else {
      let hogsToRender = this.state.greasedHogsFilter ? hogs.filter(hog => hog.greased) : hogs
      hogsToRender = this.state.sortByName ? this.sortHogs(hogsToRender, "name") : this.sortHogs(hogsToRender, "weight")

      return (
      <div className="App">
        <Nav />
        <button onClick={this.filterGreased}>{this.state.greasedHogsFilter ? "Show all Piggies" : "Show Only Greased Piggies"}</button>
        <button onClick={this.toggleSort}>{this.state.sortByName ? "Sort by weight" : "Sort by name"}</button>
        <HogList hogs={hogsToRender} getImg={this.getImg} selectHog={this.selectHog}/>
      </div>
      );
    }
  }
}

export default App;
