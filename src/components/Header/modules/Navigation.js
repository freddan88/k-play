import React, { useEffect, useState } from 'react';
import mobileLogo from '../../../Images/logo-small2.png';
import mobileSearch from '../../../Images/search-icon2.png';
import mobileMenu from '../../../Images/hamburger-icon2.png';
import mobileClose from '../../../Images/close-icon2.png';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

    const [ isScrolling, setIsScrolling ] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50){
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    }

    // componentDidMount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
      }, []);

    const menuIcon = props.toggle ? mobileClose : mobileMenu;

    return (
        <nav style={{ display: props.actionOverlayID === 2 ? 'none' : ' ' }} className={`main-navigation ${ isScrolling ? 'scrolling' : '' }`}>
            <Link to={{ pathname: '/' }}>
                <img src={mobileLogo} alt="K-Play" />
            </Link>

            <div className="buttons-container">
                <img className="search-menu" src={mobileSearch} alt="Search or filter"
                onClick={() => props.onClick(2) } />
                    {/* style={{ display: (! props.toggle && ! props.filterToggle) ? 'block' : 'none' }} /> */}

                <img className="hamburger-menu" src={menuIcon} alt="Menu" onClick={() => props.onClick(1) }
                    style={{ display: (! props.searchToggle && ! props.filterToggle) ? 'block' : 'none' }} />
            </div>
        </nav>
    );
};

export default Navigation;
