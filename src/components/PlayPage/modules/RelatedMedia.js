import React, { useEffect, useState } from 'react';
import Card from '../../Flow/modules/Card'

const RelatedMedia = (props) => {

    const [ relatedMedia, setRelatedMedia ] = useState('');
    const [ isLoaded, setIsLoaded ] = useState('false');

    const { playlists } = props.resource;
    let related = [];

    useEffect(() => {
        playlists.forEach((playlist) => {
            fetchPlaylist(playlist)
        })
    },[])

    const fetchPlaylist = async (playlist) => {
        const res = await fetch(`https://k-play-api.herokuapp.com/playlists/${playlist}`);
        const obj = await res.json();
        related.push(...obj);
        setRelatedMedia(related);
        setIsLoaded(true)
    }

    const unique = isLoaded && relatedMedia.length > 0 && [...new Set(relatedMedia)];

    return (
        <div className="flowplayer__content">

        {Array.isArray(unique) && unique.map((cardData, index) => (
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
    );
};

export default RelatedMedia;
