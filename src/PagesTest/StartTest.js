import React, { useState } from 'react';
import Header from '../components/Header/Header2';
import Flow from '../components/Flow/Flow';
import Footer from '../components/Footer/Footer';

const Start = props => {
    const [showFilterLightbox, setShowFilterLightbox] = useState(false);

    const filterLightboxToggle = () => {
        setShowFilterLightbox(!showFilterLightbox);
    }

    return (
        <div>
            <Header showFilterLightbox={ showFilterLightbox } toggleFilterLightbox={ filterLightboxToggle } />
            <Flow showFilterLightbox={ showFilterLightbox } toggleFilterLightbox={ filterLightboxToggle } />
            <Footer />
        </div>
    );
};

export default Start;
