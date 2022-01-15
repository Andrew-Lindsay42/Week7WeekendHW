import React from 'react';

const MunroDetails = function ({selectedMunro, munroWeather}){

    if (selectedMunro !== null && munroWeather !== null){

        const weatherInfo = munroWeather.map((munro, index) => {   
            return <div className='munro-weather-item' key={index}>
                <div className='weather-date'>{munro.date}</div>
                <div className='weather-temp'>{munro.temp}&#8451;</div>
                <div className='weather-icon'><i className={munro.icon}/></div>
                <div className='weather-desc'>{munro.description}</div>
            </div>
        })
        
        return (
            <>
            <div className='selected-munro'>
            <div className='munro-details'>
                <h4>{selectedMunro.name}</h4>
                <p>Region: {selectedMunro.region}</p>
                <p>Gaelic Meaning: {selectedMunro.meaning}</p>
                <p>Height: {selectedMunro.height}m</p>
            </div>
            <div className='munro-weather'>
                <>
                {weatherInfo}
                </>
            </div>
            </div>
            </>
        );
    } else {
        return (null)
    };
};

export default MunroDetails;