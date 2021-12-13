import React from "react";
import "./SignIn.css";

const SignIn = ({ routeChange }) => {
    return (
        <div className="signin">
            <input
                class="centerSignInput b ba input-reset white bg-dark-gray hover-bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
            />
            <input
                class="centerSignInput b ba input-reset b--black bg-transparent grow pointer f6"
                type="submit"
                value="Confirm"
                onClick={() => routeChange('home')}
            />
        </div>
    )
}

export default SignIn;