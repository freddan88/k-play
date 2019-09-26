import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = props => {

	const [cardData, setData] = useState(null)

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = () => {
		const api = 'http://localhost:3300'
		fetch(api)
		.then(res => res.json())
		.then(data => {
			setData(data[0])
		})
		.catch(error => console.log(error))
	}
	
	return (
		<div className="card-container">
			<img src="https://i.ytimg.com/vi/Nmf2V55mlgw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAYABAQ==&rs=AOn4CLDQJujlKHiTV-OGMGXh3ZC_qwl8eg" />
			<h4>{cardData ? cardData.title : "Main title"}</h4>
			<p>{cardData ? cardData.content : "Extra info"}</p>
		</div>
	)
}

	export default Card;