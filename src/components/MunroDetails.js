import React from 'react';

const MunroDetails = function ({selectedMunro, munroWeather}){

    if (selectedMunro !== null && munroWeather !== null){

        const weatherInfo = munroWeather.map((munro, index) => {   
            return <li key={index}>{munro.date} Temp: {munro.temp}&#8451; Description: {munro.description}<br/></li>
        })
        
        return (
            <>
            <div className='selected-munro'>
            <div className='munro-details'>
                <h4>{selectedMunro.name}</h4>
                <h5>{selectedMunro.region}</h5>
                <p>Name: {selectedMunro.meaning}</p>
                <p>Height: {selectedMunro.height}m</p>
            </div>
            <div className='munro-weather'>
                <ul>
                {weatherInfo}
                </ul>
            </div>
            </div>
            </>
        );
    } else {
        return (null)
    };
};

export default MunroDetails;