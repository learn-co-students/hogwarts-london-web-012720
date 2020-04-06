import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogsTiles from './HogsTiles'
import HogDetails  from './HogDetails'




class App extends Component {

state = {

  selectedHogName: null,
  filterHogs: false,
  sortByName: true
}

selectedHog = (Obj) =>(

  
  this.setState({
    selectedHogName: Obj,
   
  })
)


  renderImage(hog){
    return `hog-imgs/${hog.name.toLocaleLowerCase().split(' ').join('_')}.jpg`
  }

  handleSelection = () =>{
    this.setState({
      filterHogs: !this.state.filterHogs
    })
  }

  viewAllHogs = () =>{
    this.setState({
      selectedHogName: null
    })
  }


  sortHogs = (hogs) =>{
    return this.state.sortByName ?  
    hogs.sort((a, b) => (a.name > b.name) ? 1 : -1):
    hogs.sort((a, b) => (a.age > b.age) ? 1 : -1)
  }

  sortBy = () =>{
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  imageToRender = () =>{
   
    if (this.state.selectedHogName){
      return <HogDetails viewAllHogs={this.viewAllHogs} {...this.state.selectedHogName} highestMedal={this.state.selectedHogName['highest medal achieved']} img={this.renderImage(this.state.selectedHogName)} />
    } else{
      let renderHog =  this.state.filterHogs ? hogs.filter(h => h.greased): hogs
       renderHog = this.sortHogs(renderHog)
        return (
        <div><button onClick={this.handleSelection}>{this.state.filterHogs ? "see all" : "sort by Greased"  }</button>
     
        <button onClick={this.sortBy}>{this.state.sortByName ? "sort By Weight" : "sort By Name"}</button>
        <HogsTiles hogs={renderHog} renderImage={this.renderImage} selectedHog={this.selectedHog} />
   </div>
   )
    
    }
  }

  render() {
    return (

      <div className="App">
        <Nav />
      {this.imageToRender()}
        
      </div>
    );
  }
}

export default App;
