import React, { useState } from 'react';
import mobileClose from '../../../Images/close-icon2.png';

const FilterLightbox = (props) => {
    const [ isExpanded, setExpanded ] = useState(false);

    const toggleDescriptionArea = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div style={{ display: props.toggle ? 'block' : 'none', zIndex: 150 }} className="mobile" >
            <img src={mobileClose} alt="Filter Menu" onClick={ props.onFilterClick } />
             <ul>
                <li>Kategori</li>
                <li>Medverkande</li>
                <li>Event</li>
                <li>Video & Podcast</li>
            </ul>
        </div>
    );
};

export default FilterLightbox;
