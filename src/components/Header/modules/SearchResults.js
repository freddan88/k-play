import React from 'react';
import Search from './../../SearchField/Search';

const SearchResults = (props) => {

    return (
        <div style={{ display: props.toggle ? 'block' : 'none', zIndex: 150 }} className="mobile-menu" >
            <Search />
        </div>
    );
};

export default SearchResults;
