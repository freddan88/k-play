import React from 'react';
import Carousel from 'nuka-carousel';

const posters = [
    {
        taggline: "PODCAST INTERVIEW",
        title: "Spotlight on Italy",
        image: "./images/slider_img-1.png",
        description: "Meet two of Italy´s top producers, talking about their upcoming slates and new drama.",
    },
    {
        taggline: "PODCAST INTERVIEW",
        title: "Spotlight on Italy",
        image: "./images/slider_img-2.png",
        description: "Meet two of Italy´s top producers, talking about their upcoming slates and new drama.",
    },
    {
        taggline: "PODCAST INTERVIEW",
        title: "Spotlight on Italy",
        image: "./images/slider_img-3.png",
        description: "Meet two of Italy´s top producers, talking about their upcoming slates and new drama.",
    }
];

const HeaderCarusel = () => {
    return (
        <Carousel wrapAround = {true}>
            {posters.map((poster,index) => (
            <div className="poster" key={index} style={{ backgroundImage: `url(${poster.image})` }}>
                <div className="poster__description">
                    <small>{poster.taggline}</small>
                    <h2>{poster.title}</h2>
                    <p>{poster.description}</p>
                </div>
            </div>
            ))}
        </Carousel>
    );
};

export default HeaderCarusel;
