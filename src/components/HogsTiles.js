import React, { Component } from 'react'
import Tiles from './Tiles'



export default class HogsTiles extends Component {
      

  

 createTiles = () =>{
  const array = this.props.hogs
  return array.map(h => <div> <Tiles  hog={h}  selectedHog={this.props.selectedHog} name={h.name} img={this.props.renderImage(h)} /> </div>);
}
  
  render() {


    return (
      <div className='tiles-container'>
    {this.createTiles()}
      </div>
    )
  }
}
