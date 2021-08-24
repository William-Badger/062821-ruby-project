import React from 'react';
import { useState } from 'react';

const Login = () => {

const [isSign, setSign] = useState(false);

function signTrue() {
    setSign(true)
}

function signFalse() {
    setSign(false)
}
    return (
    <div>
        <div className="ui menu">
            <div className="item">
                <div className="ui button" onClick={signTrue}>Sign up</div>
            </div>
            <div className="item">
                <div className="ui button" onClick={signFalse}>Log-in</div>
            </div>
        </div>
            <div class="ui form">
                <div class="field">
                    <label>{isSign ? "Sign Up" : "Log-in"}</label>
                    <input type="text" placeholder="Username" maxLength="20"></input>
                </div>
            <div class="ui submit button">Submit</div>
        </div>
    </div>
        
    );
}

export default Login;
