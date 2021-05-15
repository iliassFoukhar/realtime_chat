import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    state = {
        input : "",
        password: ""
    }
    changeUsername = (e) => {
        this.setState({
            input : e.target.value
        });
    };
    changePassword = (e) => {
        this.setState({
            password : e.target.value
        });
    };
    render() {
        const {input, password} = this.state;
        return (
            <div className="container">            
                <div className="form">
                    <h3>Login</h3>
                    <div className="oAuth-icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-google"></i>
                        <i className="fa fa-github"></i>
                    </div>
                    <h4>Or use your email account</h4>
                    <form>
                        <label>Username</label> <br/>
                        <div className="div-group"> 
                            <i className="fa fa-user fa-sm"></i>
                            <input  type="text" 
                                    value={input}
                                    className="form-control"
                                    name="username"
                                    onChange={this.changeUsername.bind(this)}
                                    />
                        </div>
                        <br/>
                        <label>Password</label> <br/>
                        <div className="div-group"> 
                            <i className="fa fa-lock fa-sm"></i>
                            <input  type="password" 
                                    value={password}
                                    className="form-control"
                                    name="password"
                                    onChange={this.changePassword.bind(this)}
                                    />
                            </div>
                        <br/>   
                        <button className="btn">Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}
