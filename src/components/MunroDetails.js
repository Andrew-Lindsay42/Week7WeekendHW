import React from 'react';
import MunroMap from './MunroMap';

const MunroDetails = function ({selectedMunro, munroWeather, setSelectedMunro, viewMap, setViewMap}){

    const handleClick = () => {
        setSelectedMunro(null);
    };

    const handleMapClick = () => {
        setViewMap(!viewMap);
    };

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
            <i onClick={handleClick} className='far fa-times-circle'/>
            <div className='munro-details'>
                <h4>{selectedMunro.name}&nbsp;&nbsp;&nbsp;<i onClick={handleMapClick} className="fas fa-map-marked-alt"></i></h4>
                <p>Region: {selectedMunro.region}</p>
                <p>Gaelic Meaning: {selectedMunro.meaning}</p>
                <p>Height: {selectedMunro.height}m</p>
            </div>
            <div className='munro-weather'>
                <>
                {weatherInfo}
                </>
            </div>
            <div className='munro-map'>
                <MunroMap lat = {selectedMunro.latlng_lat} lng = {selectedMunro.latlng_lng} viewMap = {viewMap} setViewMap = {setViewMap}/>
            </div>
            </div>
            </>
        );
    } else {
        return (null)
    };
};

export default MunroDetails;