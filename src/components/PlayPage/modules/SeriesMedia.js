import React from 'react';
import Card from '../../Flow/modules/Card';

const SeriesMedia = (props) => {
    const { resource, isLoading } = props;
    const series = !isLoading && resource.length > 0 && resource;

    return (
        <div className="flowplayer__content">
            {
            series && series.sort((a, b) => a.order - b.order).map((cardData, index) => (
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

export default SeriesMedia;
