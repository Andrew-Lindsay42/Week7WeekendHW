import React from 'react';

const Munro = function ({munro}){
    return (
        <>
            <h4>{munro.name}</h4>
            <p>{munro.region}</p>
        </>
    );
};

export default Munro;