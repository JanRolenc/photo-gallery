import React from 'react';
import './Navigation.css';


const Navigation = ({ isSignedIn, isAbout, routeChange }) => {
    if (isSignedIn) {
        return (
            <nav className="nav">
                <p onClick={() => routeChange('about')}>About</p>
                <p onClick={() => routeChange('signout')}>Sign Out</p>
            </nav>
        );
    } else if (isAbout) {
        return (
            <nav className="nav">
                <p onClick={() => routeChange('home')}>Back</p>
            </nav>
        );
    }
    // } else {
    //     return (
    //         <p style={{ margin: '0', padding: '0' }}>ahoj</p>
    //     );
    // }

}

export default Navigation;