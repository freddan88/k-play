import _ from 'lodash';
import React, { Component } from 'react';
import Search from './Search';

const initialState = {
	isLoading: false,
	results: [],
	value: '',
	data: []
}
class SearchField extends Component {

	componentDidMount() {
		this.fetchApi();
	}

	fetchApi = () => {
		const api = 'http://localhost:3300';
		fetch(api)
		.then(res => {
			return res.json()
		})
		.then(json => {
			this.setState({
				data: json,
			});
		});
    }

    state = initialState

	handleResultSelect = (e, { result }) => this.setState({ value: result.title })

	handleSearchChange = (e, { value }) => {

		this.setState({ isLoading: true, value })
		setTimeout(() => {
			if (this.state.value.length < 1) {
				return this.setState(initialState)
			}

			const isMatch = (item) => {
				return (item.tags.indexOf(this.state.value) !== -1)
				|| (item.title.toLowerCase().indexOf(this.state.value) !== -1)
			}

			const filteredResults = _.reduce(

				{ "test": this.state.data },
				(memo, data, name) => {
					const results = _.filter(data, isMatch)

					if (results.length) {
						memo[name] = { name, results }
					}

					return memo
				},
				{},
				)
			this.setState({
				isLoading: false,
				results: filteredResults,
			})
		}, 300)
	}
	render() {
		const { isLoading, value, results, data } = this.state

		return (
			<div>
				<Search />
			</div>
			)
		}
    }

	export default SearchField;
