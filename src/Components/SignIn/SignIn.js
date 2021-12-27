import React from "react";
import "./SignIn.css";

const SignIn = ({ passwordChange, signinClick }) => {
    return (
        // <div className="signin">
        //     <input
        //         onChange={passwordChange}
        //         className="centerSignInput b ba input-reset white bg-dark-gray hover-bg-black"
        //         type="text"
        //         name="current-password"
        //         id="password"
        //         placeholder="Enter Password"
        //     />
        //     <input
        //         className="centerSignInput b ba input-reset b--black bg-transparent grow pointer f6"
        //         type="submit"
        //         value="Confirm"
        //         onClick={signinClick}
        //     />
        // </div>
        <div className="divForm">
            <form action="" className="signinForm">
                <h1 style={{ marginBottom: "0.1em" }}>Signin</h1>
                <hr style={{ width: "90%", textAlign: "center", marginTop: "0.1em", marginBottom: "0.5em" }}></hr>

                <input
                    onChange={passwordChange}
                    className="signinInput"
                    type="text"
                    name="current-password"
                    id="password"
                    placeholder="Password"
                />
                <input
                    className="signinButton"
                    type="submit"
                    value="Submit"
                    onClick={signinClick}
                />
            </form>
        </div>
    )
}

export default SignIn;