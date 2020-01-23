import React, {Component} from 'react';

class Sign extends Component{
    render() {
        return (
            <form>
                <div className="container" style={{width: 500, height:100, display: "center"}}>
          <div className="card">
            <div className="card-header text-center">
              LOGIN
            </div>
                
                <div className="form-group" >
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>

                    
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="Password" className="form-control" placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember Password</label>
                </div>
                </div>
                <button type ="submit" className= "btn btn-primary btn-block">submit</button>
                <p className="forgot-password text-center">Forgot <a href = "#">Password</a></p>
              </div>
              </div>
            
            </form>
        );
    }
    }
    export default Sign;

