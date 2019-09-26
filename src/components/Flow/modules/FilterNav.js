import React, { useState } from 'react';
import chevronDown from '../../../Images/chevron-down.png';
import Overlay from '../../Overlay/Overlay';

const FilterNav = () => {

    const [ actionID, setActionID ] = useState('')

    const toggleOverlay = (id) => {
        setActionID(id)
    }

    return (
        <>
        <Overlay show={ 3 } toggle={ true } />

        <ul className="filter-container">

            <li onClick={() => toggleOverlay(3)}>
                <span>Filtrera</span>
                <img src={chevronDown} alt="Filtrera - ChevronDown" />
            </li>

            <li onClick={() => toggleOverlay(4)}>
                <span>Sortera</span>
                <img src={chevronDown} alt="Sortera - ChevronDown" />
            </li>

        </ul>
        </>
    );
};

export default FilterNav;
