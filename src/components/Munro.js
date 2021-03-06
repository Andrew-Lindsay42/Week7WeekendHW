import React from 'react';

const Munro = function ({munro, munroSelected, setViewMap}){

    const handleClick = () => {
        munroSelected(munro);
        setViewMap(false);
    };

    if (munro.region === 'Deeside to Speyside - The Cairngorms'){
        munro.region = 'The Cairngorms'
    }

    return (
        <div className='munro-item'>
            <h4 onClick={handleClick}>{munro.name} ({munro.height}m)</h4>
            <p>{munro.region}</p>
        </div>
    );
};

export default Munro;