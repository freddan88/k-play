import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MediaPlayerAudio from './modules/MediaPlayerAudio';
import MediaPlayerVideo from './modules/MediaPlayerVideo';

import ShareBar from './modules/ShareBar';
import dropdownIcon from '../../Images/chevron-down.png';
import klappa from '../../Images/btn/clapping-white.png';
import dela from '../../Images/btn/dela_undertxt.png';
import overlayToggle from '../../Images/btn/screen/down.png';
import './PlayPage.css';

const MediaHeader = (props) => {

    const [ isExpanded, setExpanded ] = useState(false);
    const [ isHidden, setIsHidden ] = useState(true);

    const [ mediaID, setMediaID ] = useState('');
    const [ mediaType, setMediaType ] = useState('');
    const [ isShown, setIsShown ] = useState(true);

    useEffect(() => {
        const params = window.location.search.split(/=|&/);
        setMediaID(params[1])
        setMediaType(params[3])

        if(params[1] != mediaID){
            window.scrollTo(0, 0);
        }
    })

    let source;
    if (mediaType === 'audio') {
        source =`https://open.spotify.com/embed-podcast/episode/${mediaID}`;
    } else {
        source =`https://www.youtube-nocookie.com/embed/${mediaID}?start=0&rel=0&modestbranding=1`;
    }

    const { cast, tags, collaborators, date, title, description, short_title } = props.resource;

    const toggleDescriptionArea = () => {
        setExpanded(!isExpanded);
    }

    const openShareBar = () => {
        setIsHidden(false);
    }

    const closeShareBar = () => {
        setIsHidden(true);
    }

    const toggleShowArrow = () => {
        setIsShown(!isShown);
    }

    return (
        <header className="media-header" onClick={toggleShowArrow}>
                <div className="video-header__placeholder">
                    <Link to={{ pathname: '/' }}>
                        <img src={ overlayToggle } alt="screen-down" style={{  display: isShown ? ' ' : 'none'}} />
                    </Link>

                    { mediaType === 'audio' && <MediaPlayerAudio title={ title } source={ source } /> }
                    { mediaType === 'video' && <MediaPlayerVideo title={ title } source={ source } /> }
                </div>

            <div className="video-header__info">
                <div className="title_bar">
                    <h2>{ short_title }</h2>
                    <div className={`title_bar__dropdown ${isExpanded ? '' : 'expanded'}`} >
                        <img src={ dropdownIcon } alt="Expand description area" onClick={toggleDescriptionArea} />
                    </div>
                </div>
                <div className={`video-header__description ${isExpanded ? 'open' : 'closed' }`} >
                    <p>{ description }</p>
                </div>

                <div className="video-header__share" >
                <ShareBar hidden={ isHidden } />

                    <div className="clap-button" onClick={ closeShareBar }>
                        <img src={ klappa } alt="Klappa" />
                    </div>

                    <div className="share-button" onClick={ openShareBar } >
                        <img src={ dela } alt="Dela" />
                    </div>
                </div>

                <div className="media-header__meta" style={{  display: isExpanded ? 'flex' : 'none'}}>
                    <div className="left-col">
                        <div>
                            <h4>Publicerades</h4>
                            <small>{ date }</small>
                        </div>
                        <div>
                            <h4>Samarbetspartners</h4>
                            {!props.isLoading ? collaborators.map((co,i) => <small key={ i }>{ co }</small>) : 'Loading...'}
                        </div>
                    </div>
                    <div className="right-col">
                        <div>
                            <h4>Medverkande</h4>
                            {!props.isLoading ? cast.map((ca,i) => <small key={ i }>{ ca }</small>) : 'Loading...'}
                            <small>Producer, Jon Plowman</small>
                        </div>
                        <div>
                            <small>Inspelat för K-play i samarbete med Kulturakademin</small>
                        </div>
                    </div>
                </div>

                <div className="play_tag-list" style={{  display: isExpanded ? 'block' : 'none'}}>
                    <ul>
                        {!props.isLoading && tags.map((tag,i) => (
                            <Link key={ i } to={{ pathname: '/search', search: `?tag=${ tag }` }}>
                                <li>{ tag }</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="playpage-cta">
                    <h2>Kurser i musik</h2>
                    <p>Utveckla och fördjupa din sångteknik med hjälp av proffs i branschen.</p>
                </div>
            </div>
        </header>
    );
};

export default MediaHeader;
