import React from 'react';

const MobileMenu = (props) => {

    return (
        <div style={{ display: props.toggle ? 'block' : 'none' }} className="mobile-menu" >
            <ul>
                <li><a href=" ">KURSKATALOGEN</a></li>
                <li><a href=" ">KULTURAKADEMIN</a></li>
                <li><a href=" ">OM K-PLAY</a></li>
                <li><a href=" ">KONTAKT</a></li>
                <li><a href=" ">PATREON</a></li>
            </ul>
        </div>
    );
};

export default MobileMenu;
