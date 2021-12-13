import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

const Cards = ({ cards }) => {
    const cardArray = cards.map((item, index) => {
        return (
            <Card
                key={cards[index].id}
                id={cards[index].id}
                imgUrl={cards[index].url}
                title={cards[index].title}
            />
        )
    });
    return (
        <div className="cards">
            {cardArray}
        </div>
    );
}

export default Cards;