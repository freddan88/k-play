import React, { useState, useEffect } from 'react';
import MobileMenu from './modules/MobileMenu';
import SearchResults from './modules/SearchResults';
import FilterLightbox from './modules/FilterLightbox';
import Navigation from './modules/Navigation';
import HeaderCarusel from './modules/HeaderCarusel'
import Overlay from '../Overlay/Overlay';
import './Header2.css';

const Header2 = (props) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [ actionOverlay, setActionOverlay ] = useState('')

    // componentDidMount
    useEffect(() => {
        setActionOverlay(0)
    },[])

    const mobileMenuToggle = (id) => {
        setShowMobileMenu(!showMobileMenu);
        setActionOverlay(id);
    }

    const searchResultsToggle = () => {
        setShowSearchResults(!showSearchResults);
        setActionOverlay('search');
    }

    return (
        <header className="main-header">
            <Overlay toggle={ showMobileMenu } show={ actionOverlay } />
            {/* <MobileMenu toggle={ showMobileMenu } /> */}
            {/* <SearchResults toggle={ showSearchResults } onSearchClick={ searchResultsToggle } /> */}

            {/* <FilterLightbox toggle={ props.showFilterLightbox } onFilterClick={ props.toggleFilterLightbox } /> */}
            <Navigation onScroll="Hello"
                onClick={ mobileMenuToggle } toggle={ showMobileMenu }
                onSearchClick={ searchResultsToggle } searchToggle={ showSearchResults }
                filterToggle={ props.showFilterLightbox }
                actionOverlayID={ actionOverlay } />

            { window.location.pathname === '/' && <HeaderCarusel /> }
        </header>
    );
};

export default Header2;
