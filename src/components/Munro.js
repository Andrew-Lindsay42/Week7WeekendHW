import React from 'react';

const Munro = function ({munro, munroSelected}){

    const handleClick = () => {
        munroSelected(munro);
    };

    return (
        <>
            <h4 onClick={handleClick}>{munro.name}</h4>
            <p>{munro.region}</p>
        </>
    );
};

export default Munro;