import React from "react";
import "./login.css";

const Login = () => {
    return (
    <React.Fragment>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <div className="form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <br />
                <button>OK</button>
            </div>
        </div>
    </React.Fragment>   
    )
}
export default Login;