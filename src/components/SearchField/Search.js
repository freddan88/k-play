import React, { Component } from "react";
import List from './List';
import './Search.css';

class Search extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [],
		}
    }

	componentDidMount(){
        this.fetchData();
	}
	fetchData(){
		const api = `https://k-play-api.herokuapp.com`
		fetch(api)
		.then(res => res.json())
		.then(data => {
			this.setState({
				data: data
			})
		})
		.catch(error => console.log(error))
	}
	render() {
		return (
			<section className="search-content-results">
            	<List items={this.state.data} onSearchClick={this.props.onSearchClick} />
      		</section>
		)
	}
}

export default Search
