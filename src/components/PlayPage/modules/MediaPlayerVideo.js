import React from 'react';

const MediaPlayerVideo = (props) => {
    return (
        <iframe
            title={ props.title } src={ props.source } frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen>
        </iframe>
    );
};

export default MediaPlayerVideo;