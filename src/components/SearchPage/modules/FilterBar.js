import React, { useState } from 'react';
import chevronDown from '../../../Images/chevron-down.png';

const filterBar = (props) => {

    return (

        <div className="filter-bar-search">
            <ul>
                <li>
                    Filtrera
                    <img src={chevronDown} alt="Filtrera - ChevronDown" />
                </li>
                <li>
                    Sortera
                    <img src={chevronDown} alt="Sortera - ChevronDown" />
                </li>
            </ul>
        </div>
    );
};

export default filterBar;
