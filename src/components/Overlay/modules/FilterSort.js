import React from 'react';
import chevronDown from '../../../Images/chevron-down.png';

const FilterSort = (props) => {

    console.log(window.location.search)

    return (
        <section className="filter-overlay">
            <div className="overlay-filterbar">
                <ul className="overlay-filter-ul">
                    <li>
                        <span>Filtrera</span>
                        <img src={chevronDown} alt="Filtrera - ChevronDown" />
                    </li>

                    <li>
                        <span>Sortera</span>
                        <img src={chevronDown} alt="Sortera - ChevronDown" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default FilterSort;
