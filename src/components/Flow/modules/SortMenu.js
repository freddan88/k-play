import React from 'react';
import Add from './../../../Images/add.png';
import {Collapse} from 'react-collapse';

const SortMenu = (props) => {
const body = document.querySelector('body');

    if (props.toggleWin) {
        body.style.overflow = "hidden"
    } else {
        body.removeAttribute("style");
    }
    
    return (
        <div style={{ display: props.toggleSort ? 'block' : 'none' }} className="filter-menu" >
            <ul>
                <Collapse isOpened={true}>
                    <p>aa</p>
                </Collapse>
            </ul>
        </div>
    );
};

export default SortMenu;