import React, { useState } from 'react';

const Category0 = (props) => {

    const [ checkedItems, setCheckedItems ] = useState([]);

    const target = (e) => {
        console.dir(e.target.id)
        setCheckedItems([...checkedItems, e.target.id])
    }

    const test = (e) => {
        console.dir(e.target.value)
    }

    console.log(props)

    return (
        <div style={{ display: props.sektion === props.id ? 'block' : 'none' }}>
            <section className={`dropdown-section dropdown-section-${ props.id }`}>

                <div className="dropdown-section__column">
                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-1`} onClick={ target } onChange={ test } />
                    <label for={`checkbox-${ props.category }-1`}>
                        <span>Ansökningar</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-2`} onClick={ target }/>
                    <label for={`checkbox-${ props.category }-2`}>
                        <span>Finans</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-3`} onClick={ target }/>
                    <label for={`checkbox-${ props.category }-3`}>
                        <span>Samarbete</span>
                    </label>
                </div>

                <div className="dropdown-section__column">
                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-4`} onClick={ target }/>
                    <label for={`checkbox-${ props.category }-4`}>
                        <span>Hållbarhet</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-5`} onClick={ target }/>
                    <label for={`checkbox-${ props.category }-5`}>
                        <span>Trender</span>
                    </label>

                    <input type="checkbox" className="checkbox"id={`checkbox-${ props.category }-6`} onClick={ target }/>
                    <label for={`checkbox-${ props.category }-6`}>
                        <span>Teknik</span>
                    </label>
                </div>
            </section>
            { console.log(checkedItems) }
            <div className="clean-this-filter-button">Rensa filter</div>

        </div>
    );
};

export default Category0;
