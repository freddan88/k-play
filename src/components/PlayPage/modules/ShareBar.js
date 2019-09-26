import React from 'react';
import ShareImg from '../../../Images/bar/dela.png';

const ShareBar = (props) => {

    return (
        <main className={ `share-bar ${ props.hidden ? '' : 'open' }` }>
            <img src={ ShareImg } alt="Share on social media and more" />
        </main>
    );
};

export default ShareBar;