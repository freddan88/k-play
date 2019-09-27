import React, { useState, useEffect } from 'react';
import expandICO from '../../../Images/expandOverlayItem.png';
import closeICO from '../../../Images/closeOverlayItem.png';
import activeICO from '../../../Images/activeOverlayItem.png';

const SortView = (props) => {

    const [ activeLink, setActiveLink ] = useState('');

    useEffect(() => {
        setActive()
    },[])

    const setActive = (id) => {
        id = typeof id !== 'undefined' ? id : 0;
        setActiveLink(id)
    }

    const categories = ['Senaste','Populära','Från A - Ö'];

    return (
        <div>
        <ul className="category-list">
            {categories.map((category,index) => (
            <React.Fragment key={ index }>
            <li>
                <span style={{ color: activeLink === index ? '#CD7B29' : 'white'}}>{ category }</span>
                <div className="toggleExpandButton" onClick={() => setActive(index)}>
                    <img src={ activeLink === index ? activeICO : expandICO } alt="Expand Section" />
                </div>
            </li>
            </React.Fragment>
            ))}
        </ul>
    </div>
    );
};

export default SortView;
