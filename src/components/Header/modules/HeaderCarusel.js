import React from 'react';
import Carousel from 'nuka-carousel';

const posters = [
    {
        taggline: "Podcast",
        title: "Adaptionsseminarium",
        image: "./images/slider_img-4.png",
        description: "Hur jobbar branschen med adaption från bok till film? Vi fördjupar oss i ämnet.",
    },
    {
        taggline: "KURS",
        title: "Art & Business",
        image: "./images/slider_img-5.png",
        description: "Kostnadsfri kurs för att öka kunskapen om företagande hos kreatörer och konstnärer.",
    },
    {
        taggline: "video",
        title: "Audiovisual Days 2018",
        image: "./images/slider_img-6.png",
        description: "Lyssna till våra inbjudna experter när de ger deras syn på framtidens dramaserier.",
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
