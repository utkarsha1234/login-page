import React, {Component} from 'react';

class Sum extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      Result: 0
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

  hanndlesumClick = () => {
    let x = this.state.first + this.state.second;
    this.setState({
      Result : x
    });
  };

  hanndlesubClick = () => {
    let y = this.state.first - this.state.second;
    this.setState({
      Result : y
    });
  };

  hanndlemulClick = () => {
    let z = this.state.first * this.state.second;
    this.setState({
      Result : z
    });
  };
  hanndledivClick = () => {
    let w = this.state.first / this.state.second;
    this.setState({
      Result : w
    });
  };

  render(){
    return(
        <div className="container">
          <div className="card">
            <div className="card-header text-center">
              Sum
            </div>
            <div className='card-body text-center'>
              <div className='row'>
                <label>First Number : </label>
                <input type='number' step = "0.01" className="form-control" onChange={this.handleFirstNumber}/>
                <br/>
                <label>Second Number : </label>
                <input type='number' step = "0.01" className="form-control" onChange={this.handleSecondNumber}/>
                <br/>
                <input type='button' value='Add' className="form-control btn-primary" onClick={this.hanndlesumClick}/> <br/>
                <input type='button' value='sub' className="form-control btn-primary" onClick={this.hanndlesubClick}/> <br/>
                <input type='button' value='mul' className="form-control btn-primary" onClick={this.hanndlemulClick}/> <br/>
                <input type='button' value='div' className="form-control btn-primary" onClick={this.hanndledivClick}/>
                <br/>
                <label> Result: {this.state.Result} </label>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Sum;