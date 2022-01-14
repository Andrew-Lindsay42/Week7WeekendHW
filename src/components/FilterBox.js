import React from 'react';

const FilterBox = ({setFilter}) => {

    const handleChange = function(event) {
        setFilter(event.target.value);
      }

    return(
        <>
            Filter by name: <input type="text" onChange={handleChange} />
        </>
    )
};

export default FilterBox;