import React, {Component} from 'react';

class Log extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      sum: 0

    

    };
  }

  handleFirstNumber = event => {
    this.setState({
      first: Number(event.target.value)
    });
  };

  handleSecondNumber = event => {
    this.setState({
      second: Number(event.target.value)
    });
  };

  hanndleClick = () => {
    let x = this.state.first + this.state.second;
    this.setState({
      sum : x
    });
  };

  render(){
    return(
        <div className="container" style={{width: 500, height:100, display: "center"}}>
          <div className="card">
            <div className="card-header text-center">
              LOGIN
            </div>
            <div className='card-body text-center'>
              <div className='row'>
                <label>USERNAME : </label>
                <input type='text' step = "0.01" className="form-control" onChange={this.handleFirstNumber}/>
                <br/>
                <label>PASSWORD : </label>
                <input type='text'  className="form-control" onChange={this.handleSecondNumber}/>
                <br/>
                <input type='button' value='Submit' className="form-control btn-danger" onClick={this.hanndleClick}/>
                <br/>
                <input type='button' value='Remember password' className="form-control btn-danger" onClick={this.hanndleClick}/>


              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Log;
