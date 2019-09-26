import React, { useState } from 'react';
import Add from './../../../Images/add.png';
import { Collapse } from 'react-collapse';
import mobileMenu from '../../../Images/hamburger-icon2.png';
import mobileClose from '../../../Images/close-icon2.png';

const FilterMenu = (props) => {
    const body = document.querySelector('body');

    const [ isExpanded, setExpanded ] = useState(false);
    
    const toggleOnClick = () => {
        setExpanded(!isExpanded);
        console.log('click')
    }
    if (props.toggleFilter) {
        body.style.overflow = "hidden"
    } else {
        body.removeAttribute("style");
    }
    return (
        <div style={{ display: props.toggleFilter ? 'block' : 'none' }} className="filter-menu" >
            <ul>
                <div className={`cat-dropdown ${isExpanded ? 'expanded' : 'close'}`} >
                    <li className="" onClick={toggleOnClick}>Kategori</li>
                    <label><input type="checkbox" />Serier</label>
                </div>
                <li>Medverkande</li>
                <li>Event</li>
                <li>Video & Podcast</li>
            </ul>
        </div>
    );
};

export default FilterMenu;