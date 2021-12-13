// import React, { useState } from 'react';
import React from 'react';
import './Card.css'

const Card = ({ imgUrl, title }) => {
    // const [style, setStyle] = useState("cardDivImg");
    // const [bigSize, setSize] = useState(false);

    // const changeStyle = () => {
    //     if (bigSize) {
    //         setStyle("cardDivImg");
    //         setSize(false);
    //     } else {
    //         setStyle("imgClick");
    //     }
    // };
    return (
        <div className="cardDiv">
            {/* <img src={imgUrl} alt="img" onClick={changeStyle} className={style} /> */}
            <img src={imgUrl} alt="img" className='cardDivImg' />
            <div className="centerVertical">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Card;

//onClick zmena class mi fungovala, ale spatne jel scale (zvetsovalo se mnohem vic)
//a taky mi nechtelo fungovat druhy click, kdy jsem chtel fotku zase vratit do puvodni podoby 