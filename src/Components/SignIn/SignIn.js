import React from "react";
import "./SignIn.css";

const SignIn = ({ passwordChange, confirmClick }) => {
    return (
        <div className="signin">
            <input
                onChange={passwordChange}
                className="centerSignInput b ba input-reset white bg-dark-gray hover-bg-black"
                type="text"
                name="current-password"
                id="password"
                placeholder="Enter Password"
            />
            <input
                className="centerSignInput b ba input-reset b--black bg-transparent grow pointer f6"
                type="submit"
                value="Confirm"
                onClick={confirmClick}
            />
        </div>
    )
}

export default SignIn;