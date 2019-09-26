import React, { useState, useEffect } from 'react';
import RelatedMedia from './RelatedMedia';
import SeriesMedia from './SeriesMedia';
import Card from '../../Flow/modules/Card';

const FlowPlayerPage = (props) => {

    const [ series, setSeries ] = useState([]);
    const [ isActive, setActive ] = useState(0);
    const [ isLoading, setLoading ] = useState(true)

    const mainPlaylist = props.resource.playlists[0];

    useEffect(() => {
        fetchData(mainPlaylist);
    },[]);

    const fetchData = async (playlist) => {
        const api = `https://k-play-api.herokuapp.com/playlists/${playlist}`;
        const prom = await fetch(api)
        const data = await prom.json();
        setSeries(data);
        setLoading(false);
    }

    const toggleActive = (index) => {
        setActive(index)
    }

    return (
        <section className="flowplayer">

            <div className="flowplayer__related">
                <ul>
                    <li onClick={ () => toggleActive(0)}
                        className={ isActive === 0 ? 'active' : ''}>Serie</li>

                    <li onClick={ () => toggleActive(1)}
                        className={ isActive === 1 ? 'active' : ''}>Liknande</li>
                </ul>
            </div>
            { isActive === 0 && <SeriesMedia resource={ series } isLoading={ isLoading } /> }
            { isActive === 1 && <RelatedMedia resource={ props.resource } /> }
        </section>
    );
};

export default FlowPlayerPage;
