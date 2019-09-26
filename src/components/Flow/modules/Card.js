import React from 'react';
import { Link } from 'react-router-dom';

import cardSmallVideo from '../../../Images/card-small_video.png';
import cardSmallMic from '../../../Images/card-small_mic.png';
import exampleArt from '../../../Images/cards/id_ 70.png';

const Card = (props) => {

    let mediaIcon;
    if (props.type === 'video') {
        mediaIcon = cardSmallVideo;
    } else {
        mediaIcon = cardSmallMic;
    }

    return (
        <Link to={{ pathname: `/player`, search: `id=${props.id}&type=${props.type}` }}>
            <div className="media-card">
                <img className="media-card__icon" src={mediaIcon} alt={props.type} />

                <div className="thumb__placeholder">
                    <img className="media-card__thumb" src={ props.thumb } alt={ props.title } />
                    <div className="time-tag"><span>13:10</span></div>
                </div>

                <div className="media-card__info">
                    <small>{ props.level }</small>
                    <h2>{ props.short_title }</h2>
                    <p>{ props.desc }</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
