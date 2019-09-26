import React, { Component, useState, setState } from "react";
import Card from "./../Flow/modules/Card";
import chevronDown from '../../Images/chevron-down.png';

import searchIconOverlay from '../../Images/search-icon-overlay.png'
import './Search.css';

class List extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filteredItems: [],
			isExpanded: false,
			isHidden: false,
		}
	}

    closeMenu(){
        const MainNavigationMaobile1 = document.querySelector('.main-navigation-maobile1');
        const mainNavigation = document.querySelector('.main-navigation');
        MainNavigationMaobile1.style.display = "none";
        mainNavigation.removeAttribute('style');
    }

	setExpanded(value) {
		this.state.isExpanded = value
	}

	setIsHidden(value) {
		this.state.isHidden = value
	}

	handleChange(e) {
		let searchQuery = e.target.value.toLowerCase();
		let results = this.props.items.filter(obj => {
			return (obj.title.toLowerCase().indexOf(searchQuery) >= 0);
		})

		this.setState({
			filteredItems: results
		})

		return results
	}

	showBox() {
	    this.setExpanded(!this.state.isExpanded);
	}

	render() {
		return (
			<div className="search-result">

                <div className="flexbar">
                    <div className="filter-bar">
                        <img src={ searchIconOverlay } alt="searchIconOverlay" />
                        <input type="text" className="input"
                        onChange={this.handleChange.bind(this)} onClick={this.showBox.bind(this)}
                        placeholder="Sök bland allt material..." />
                    </div>

                    <h4 className="CloseSearchOverlay" onClick={this.closeMenu}>Avbryt</h4>
                </div>

                <div className="search-result-filter">
                    <ul>
                        <li>
                            Filtrera
                            <img src={chevronDown} alt="Filtrera - ChevronDown" />
                        </li>
                        <li>
                            Sortera
                            <img src={chevronDown} alt="Sortera - ChevronDown" />
                        </li>
                    </ul>
                </div>

	    		<div className={`dropdown-window ${this.state.isExpanded ? 'open' : 'closed' }`} >
	    			{this.state.filteredItems.map((item, i) => (
						<Card key={i}
						thumb={ item.thumb2 }
						level={ item.level }
						id={ item.media_id }
						desc={ item.description }
						short_desc={ item.short_description }
						title={ item.title }
						short_title={ item.short_title }
						type={ item.type }
						/>
					))}
	    		</div>
			</div>
		)
	}
}


export default List;
