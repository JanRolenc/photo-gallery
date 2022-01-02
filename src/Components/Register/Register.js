import React from 'react';
import './Register.css';

const Register = ({ passwordChange, emailChange, nameChange, registerClick }) => {
    return (
        <div className="center">

            <form action="" className="registerForm">
                <h1 style={{ marginBottom: "0.1em" }}>Register</h1>
                <hr style={{ width: "90%", textAlign: "center", marginTop: "0.1em", marginBottom: "0.5em" }}></hr>
                <input
                    onChange={nameChange}
                    className="registerInput"
                    type="text"
                    name="current-name"
                    id="name"
                    placeholder="Set Name"
                />
                <input
                    onChange={emailChange}
                    className="registerInput"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Set Email"
                />
                <input
                    onChange={passwordChange}
                    className="registerInput"
                    type="text"
                    name="current-password"
                    id="password"
                    placeholder="Set Password"
                />
                <input
                    className="registerButton"
                    type="submit"
                    value="Submit"
                    onClick={registerClick}
                />
            </form>
        </div>

    );
}

export default Register;