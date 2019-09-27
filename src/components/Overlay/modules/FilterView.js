import React, { useState, useEffect } from 'react';
import Category0 from './FilterView_dropdowns/Category0';
import Category1 from './FilterView_dropdowns/Category1';
import expandICO from '../../../Images/expandOverlayItem.png';
import closeICO from '../../../Images/closeOverlayItem.png';

const FilterView = () => {

    const [ expandSektion, setExpandSektion ] = useState('');

    const expandSektionID = (id) => {
        setExpandSektion(id)

    }

    const categories = ['Kategori','Format','Event','Video & Podcast'];

    return (
        <div>
            <ul className="category-list">
                {categories.map((category,index) => (
                <React.Fragment key={ index }>
                <li>
                    <span>{ category }</span>
                    <div className="toggleExpandButton" onClick={() => expandSektionID(index)}>
                        <img src={ expandSektion === index ? closeICO : expandICO } alt="Expand Section" />
                    </div>
                </li>
                    { index === 0 && <Category0 id={ index } sektion={expandSektion}
                        category={ category.replace(/ /g, "").toLowerCase() }/> }

                    { index !== 0 && <Category1 id={ index } sektion={expandSektion}
                        category={ category.replace(/ /g, "").toLowerCase() }/> }
                </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default FilterView;
