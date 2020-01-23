import React, {Component} from 'react';
import "./NeonButton.css";

class NeonButton extends Component{
  render(){
    return(
        <div className="NeonButton" >
            
            
          <br/>

          <a href="#">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name}
          </a>
        </div>
    );
  }
}

export default NeonButton;