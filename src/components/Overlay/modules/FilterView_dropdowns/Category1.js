import React from 'react';

const Category0 = (props) => {

    return (
        <div style={{ display: props.sektion === props.id ? 'block' : 'none' }}>
            <section className={`dropdown-section dropdown-section-${ props.id }`}>

                <div className="dropdown-section__column">
                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-1`} />
                    <label htmlFor={`checkbox-${ props.category }-1`}>
                        <span>Exempel</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-2`} />
                    <label htmlFor={`checkbox-${ props.category }-2`}>
                        <span>Exempel</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-3`} />
                    <label htmlFor={`checkbox-${ props.category }-3`}>
                        <span>Exempel</span>
                    </label>
                </div>

                <div className="dropdown-section__column">
                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-4`} />
                    <label htmlFor={`checkbox-${ props.category }-4`}>
                        <span>Exempel</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-5`} />
                    <label htmlFor={`checkbox-${ props.category }-5`}>
                        <span>Exempel</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-6`} />
                    <label htmlFor={`checkbox-${ props.category }-6`}>
                        <span>Exempel</span>
                    </label>
                </div>
            </section>

            <div className="clean-this-filter-button">Rensa filter</div>

        </div>
    );
};

export default Category0;
