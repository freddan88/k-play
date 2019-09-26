import React, { useState } from 'react';
import chevronDown from '../../../Images/chevron-down.png';
import Overlay from '../../Overlay/Overlay';

const FilterNav = () => {

    const [ overlayID, setOverlayID ] = useState('')
    const [ actionID, setActionID ] = useState('')

    const toggleOverlay = (o,a) => {
        setOverlayID(o)
        setActionID(a)
    }

    return (
        <>
        <Overlay show={ 3 } toggle={ true } action={ 1 } />

        <ul className="filter-container">

            <li onClick={() => toggleOverlay(3,1)}>
                <span>Filtrera</span>
                <img src={chevronDown} alt="Filtrera - ChevronDown" />
            </li>

            <li onClick={() => toggleOverlay(4,2)}>
                <span>Sortera</span>
                <img src={chevronDown} alt="Sortera - ChevronDown" />
            </li>

        </ul>
        </>
    );
};

export default FilterNav;
