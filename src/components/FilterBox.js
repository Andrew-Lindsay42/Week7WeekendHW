import React from 'react';
import MunroSelect from './MunroSelect';

const FilterBox = ({filter, setFilter}) => {

    const handleChange = function(event) {

        let newfilter = {text: filter.text, region: filter.region}

        if (event.target.tagName === 'INPUT') {
            newfilter.text = event.target.value
        } else {
            newfilter.region = event.target.value
        }
        
        setFilter(newfilter)
      }

    return(
        <>
            Filter by name: <input type="text" onChange={handleChange} /> and/or by region: <select defaultValue="" onChange={handleChange}>{MunroSelect()}</select>
        </>
    )
};

export default FilterBox;

