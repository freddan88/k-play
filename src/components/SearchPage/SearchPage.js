import React, { useEffect, useState } from 'react';
import Card from '../Flow/modules/Card';
import Header from '../Header/Header2';
import Footer from '../Footer/Footer';
import FilterBar from './modules/FilterBar';
import './SearchPage.css';

const SearchPage = (props) => {

    const [ isLoading, setLoading ] = useState(true);
    const [ result, setResult ] = useState('');
    const [ queryParams, setQueryParams ] = useState('');

    useEffect(() => {
        const search = window.location.search.split(/=|&/);
        setQueryParams(search)

        let query = [];
        for (let i = 1; i < search.length; i++) {
            query.push(search[i])
        }

        query.forEach((key) => {
            fetchData(key)
        });
    },[])

    let terms = [];
    const fetchData = async (key) => {
        const api = `https://k-play-api.herokuapp.com/tags/${key}`;
        const prom = await fetch(api)
        const data = await prom.json();
        terms.push(...data);
        setLoading(false);
        setResult(terms)
    }

    return (
        <section className="search-page">
            <Header />

            <div className="result-box">
                { <h2 className="search-results">{ result.length } Träffar {queryParams.length > 2 ? '' : `på ”${queryParams[1]}”`}</h2> }
            </div>

            <FilterBar />

            <div className="search-page__content">
            {!isLoading && result.length > 0 && result.map((cardData, index) => (
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
            <Footer />
        </section>
    );
};

export default SearchPage;
