import React from 'react';

const MunroDetails = function (selectedMunro){

    if (selectedMunro.selectedMunro !== null){

        let munro = selectedMunro['selectedMunro']
        return (
            <div className='munro-details'>
                <h4>{munro.name}</h4>
                <h5>{munro.region}</h5>
                <p>Name meaning: {munro.meaning}</p>
                <p>Height: {munro.height}</p>
            </div>
        );
    } else {
        return (null)
    };
};

export default MunroDetails;