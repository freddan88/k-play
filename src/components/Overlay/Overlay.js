import React from 'react';
import Navigation from './modules/Navigation';
import Search from './modules/Search';
import FilterSort from './modules/FilterSort';
import './Overlay.css';

const Overlay = (props) => {

    console.log(props)

    return (
        <nav className="main-navigation-maobile1" style={{ display: props.toggle ? 'block' : 'none' }} >
            { props.show === 1 && <Navigation /> }
            { props.show === 2 && <Search onSearchClick={props.onSearchClick} /> }
            { props.show === 3 && <FilterSort action={ props.action } /> }
        </nav>
    );
};

export default Overlay;
