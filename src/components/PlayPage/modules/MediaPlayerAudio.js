import React from 'react';

const MediaPlayerAudio = (props) => {
    return (
        <iframe src={ props.source } title={ props.title }
            width="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media">
        </iframe>
    );
};

export default MediaPlayerAudio;