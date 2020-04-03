import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard"

class HogCard extends React.Component {
    state = {  
        clicked: false
    }
   
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
 
    render() { 
        return (
        <div className="ui card eight wide column pigTile" onClick={this.handleClick}>
            {this.state.clicked ? <BackCard hog={this.props.hog}/> 
            :
            <FrontCard hog={this.props.hog}/>}
        </div>
        )
    }
}
 
export default HogCard;