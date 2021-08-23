import React from 'react';

const Login = () => {
    return (
    <div>
        <div className="ui menu">
            <div className="item">
                <div className="ui primary button">Sign up</div>
            </div>
            <div className="item">
                <div className="ui button">Log-in</div>
            </div>
        </div>
            <div class="ui form">
                <div class="field">
                    <label>Username</label>
                    <input type="text" placeholder="Username" maxLength="20"></input>
                </div>
            <div class="ui submit button">Submit</div>
        </div>
    </div>
        
    );
}

export default Login;
