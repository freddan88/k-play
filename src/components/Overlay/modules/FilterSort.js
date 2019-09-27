import React,{ useState, useEffect } from 'react';
import chevronDown from '../../../Images/chevron-down.png';
import chevronUp from '../../../Images/chevron-up-active.png';
import FilterView from './FilterView';

const FilterSort = (props) => {

    const [ active, setActive ] = useState('');

    useEffect(() => {
        console.log( props );
        setActive(props.action)
    },[])

    const toggleNavigation = (id) => {
        setActive(id)
    }

    return (
        <section className="filter-overlay">

            <div className="overlay-filterbar">
                <ul className="overlay-filter-ul">
                    <li onClick={() => toggleNavigation(1)}>
                        <span className={ active === 1 ? 'active' : ''}>Filtrera</span>
                        <img src={ active === 1 ? chevronUp : chevronDown } alt="Filtrera - ChevronDown" />
                    </li>

                    <li onClick={() => toggleNavigation(2)}>
                        <span className={ active === 2 ? 'active' : ''}>Sortera</span>
                        <img src={ active === 2 ? chevronUp : chevronDown } alt="Sortera - ChevronDown" />
                    </li>
                </ul>
            </div>

            <FilterView />

            <div className="filterSort-buttons_container">
                <button className="button secondary-disabled">Rensa alla filter</button>
                <button className="button primary-active">Visa valda</button>
            </div>

        </section>
    );
};

export default FilterSort;
