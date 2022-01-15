import React from 'react';

const MunroDetails = function ({selectedMunro, munroWeather}){

    console.log('Munro weather:', munroWeather);
    console.log('Selected Munro:', selectedMunro);

    if (selectedMunro !== null){
        return (
            <>
            <div className='munro-details'>
                <h4>{selectedMunro.name}</h4>
                <h5>{selectedMunro.region}</h5>
                <p>Name meaning: {selectedMunro.meaning}</p>
                <p>Height: {selectedMunro.height}m</p>
            </div>
            <div className='munro-weather'>
                {munroWeather.list[0].main.temp}
            </div>
            </>
        );
    } else {
        return (null)
    };
};

export default MunroDetails;