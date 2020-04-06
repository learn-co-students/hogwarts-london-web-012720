import React from 'react'
import Hog from '../components/Hog'

class HogList extends React.Component { 

    renderHogs() {
       return this.props.hogs.map((hog, index) => 
        <Hog name={hog.name} 
        image={this.props.getImg(hog)}
        key={index}
        selectHog={this.props.selectHog}
        hog={hog}
       />)
    }

    render() {
        return (
           <div>{ this.renderHogs() }</div>
        )
    }
}

export default HogList