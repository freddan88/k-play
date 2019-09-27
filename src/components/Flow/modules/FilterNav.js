import React, { useState } from 'react';
import chevronDown from '../../../Images/chevron-down.png';
import Overlay from '../../Overlay/Overlay';

const FilterNav = () => {

    const [ overlayID, setOverlayID ] = useState('')
    const [ actionID, setActionID ] = useState('')
    const [ openOverlay, setOpenOverlay ] = useState(false)

    const toggleOverlay = (o,a) => {
        setOverlayID(o)
        setActionID(a)
        setOpenOverlay(!openOverlay)
    }

    return (
        <>
        <Overlay show={ overlayID } toggle={ openOverlay } action={ actionID } />

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
