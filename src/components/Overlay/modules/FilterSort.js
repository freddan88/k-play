import React,{ useState, useEffect } from 'react';
import chevronDown from '../../../Images/chevron-down.png';
import chevronUp from '../../../Images/chevron-up-active.png';
import FilterView from './FilterView';
import SortView from './SortView';

const FilterSort = (props) => {

    const [ active, setActive ] = useState('');
    const [ btnShow, setBtnShow ] = useState('');

    useEffect(() => {
        setActive(props.action)
        setBtnShow(props.btnShow)
    },[])

    const toggleNavigation = (id,show) => {
        setActive(id)
        setBtnShow(show)
    }

    return (
        <section className="filter-overlay">

            <div className="overlay-filterbar">
                <ul className="overlay-filter-ul">
                    <li onClick={() => toggleNavigation(1,true)}>
                        <span className={ active === 1 ? 'active' : ''}>Filtrera</span>
                        <img src={ active === 1 ? chevronUp : chevronDown } alt="Filtrera - ChevronDown" />
                    </li>

                    <li onClick={() => toggleNavigation(2,false)}>
                        <span className={ active === 2 ? 'active' : ''}>Sortera</span>
                        <img src={ active === 2 ? chevronUp : chevronDown } alt="Sortera - ChevronDown" />
                    </li>
                </ul>
            </div>

            { active === 1 ? <FilterView text="Visa valda" visa="true" /> : '' }
            { active === 2 ? <SortView text="Visa sökresultat" visa="false" /> : '' }

            <div className="filterSort-buttons_container">

                <button onClick={() => window.location.reload()}
                style={{ visibility: btnShow ? 'visible' : 'hidden' }}
                className="button secondary-disabled">Rensa alla filter</button>

                <button onClick={() => window.location.reload()}
                className="button primary-active">{ props.btnText }</button>

            </div>

        </section>
    );
};

export default FilterSort;
