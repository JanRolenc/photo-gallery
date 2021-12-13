import React from 'react';
import './Filterinput.css';

const Filterinput = ({ searchChange }) => {

    return (
        <div className="filterdiv">
            <input className='filterinput'
                onChange={searchChange}
                type="search"
                placeholder='filtruj podle klicovych slov'
            />
        </div>
    );
}

export default Filterinput;