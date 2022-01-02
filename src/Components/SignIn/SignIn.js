import React from "react";
import "./SignIn.css";

const SignIn = ({ passwordChange, signinClick }) => {
    return (
        <div className="divForm">
            <div className="signinForm">
                <h1 style={{ marginBottom: "0.1em" }}>SignIn</h1>
                <hr style={{ width: "90%", textAlign: "center", marginTop: "0.1em", marginBottom: "0.5em" }}></hr>

                <input
                    onChange={passwordChange}
                    className="signinInput"
                    type="text"
                    name="current-password"
                    id="password"
                    placeholder="insert password"
                />
                <input
                    className="signinButton"
                    type="submit"
                    value="Submit"
                    onClick={signinClick}
                />
            </div>
        </div>
    )
}

export default SignIn;