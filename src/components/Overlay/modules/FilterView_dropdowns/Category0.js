import React from 'react';

const Category0 = (props) => {

    console.log(props)

    return (
        <div style={{ display: props.sektion === props.id ? 'block' : 'none' }}>
            <section className={`dropdown-section dropdown-section-${ props.id }`}>

                <div className="dropdown-section__column">
                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-1`} />
                    <label for={`checkbox-${ props.category }-1`}>
                        <span>Ansökningar</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-2`} />
                    <label for={`checkbox-${ props.category }-2`}>
                        <span>Finans</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-3`} />
                    <label for={`checkbox-${ props.category }-3`}>
                        <span>Samarbete</span>
                    </label>
                </div>

                <div className="dropdown-section__column">
                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-4`} />
                    <label for={`checkbox-${ props.category }-4`}>
                        <span>Hållbarhet</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-5`} />
                    <label for={`checkbox-${ props.category }-5`}>
                        <span>Trender</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-6`} />
                    <label for={`checkbox-${ props.category }-6`}>
                        <span>Teknik</span>
                    </label>
                </div>
            </section>

            <div className="clean-this-filter-button">Rensa filter</div>

        </div>
    );
};

export default Category0;
