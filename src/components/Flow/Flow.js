import React, { Component } from "react";
import Card from "./modules/Card";
import FilterNav from "./modules/FilterNav";
import FlowCta from "./modules/FlowCta";
import "./Flow.css";

class Flow extends Component {
	constructor(props){
		super(props)
		this.state = {
			cardsData: [],
			active: 0,
		}
	}

	componentDidMount(){
		this.fetchData();
	}

	fetchData(filter = 'allt'){
		const api = `https://k-play-api.herokuapp.com/category/${filter}`
		fetch(api)
		.then(res => res.json())
		.then(data => {
			this.setState({
				cardsData: data
			})
		})
		.catch(error => console.log(error))
	}

	setActive(index, value){
		this.setState({active: index});
		this.fetchData(value);
	}

	render() {
		const { cardsData } = this.state;

		return (
			<div className="flow-main">
				<div className="flow-header">
					<div className="flow-categories">
						<ul className="flow-categories-list">
							<li onClick={() => this.setActive(0,'allt')}
								className={ this.state.active === 0 ? 'active' : ' '}>Allt</li>
							<li onClick={() => this.setActive(1,'scenkonst')}
								className={ this.state.active === 1 ? 'active' : ' '}>Scenkonst</li>
							<li onClick={() => this.setActive(2,'film&tv')}
								className={ this.state.active === 2 ? 'active' : ' '}>Film & TV</li>
							<li onClick={() => this.setActive(3,'musik')}
								className={ this.state.active === 3 ? 'active' : ' '}>Musik</li>
						</ul>
					</div>

					<div className="flow-filter">
						<FilterNav />
					</div>
				</div>

				<div className="flow-content">
				<FlowCta />
				{cardsData.map((cardData, index) => (
					<Card key={index}
					thumb={ cardData.thumb2 }
					level={ cardData.level }
					id={ cardData.media_id }
					desc={ cardData.description }
					short_desc={ cardData.short_description }
					title={ cardData.title }
					short_title={ cardData.short_title }
					type={ cardData.type }
					/>
				))}
				</div>
			</div>
		)
	}
}

export default Flow;
