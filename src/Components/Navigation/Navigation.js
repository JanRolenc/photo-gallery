import React from 'react';
import './Navigation.css';


const Navigation = ({ isSignedIn, isAbout, routeChange, isRegister }) => {
    if (isSignedIn) {
        return (
            <nav className="nav">
                <p onClick={() => routeChange('about')}>About</p>
                <p onClick={() => routeChange('signin')}>SignOut</p>
            </nav>
        );
    } else if (isAbout) {
        return (
            <nav className="nav">
                <p onClick={() => routeChange('home')}>Back</p>
            </nav>
        );
    } else if (isRegister) {
        return (
            <nav className="nav">
                <p onClick={() => routeChange('signin')}>Back</p>
            </nav>
        );
    }
    else {
        return (
            <nav className="nav">
                <p onClick={() => routeChange('register')}>Register</p>
            </nav>
        );
    }
}

export default Navigation;