import React from 'react';

const Munro = function ({munro, munroSelected}){

    const handleClick = () => {
        munroSelected(munro);
    };

    if (munro.region === 'Deeside to Speyside - The Cairngorms'){
        munro.region = 'The Cairngorms'
    }

    return (
        <>
            <h4 onClick={handleClick}>{munro.name}</h4>
            <p>{munro.region}</p>
        </>
    );
};

export default Munro;