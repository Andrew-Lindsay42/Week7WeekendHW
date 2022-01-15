import React from 'react';

const MunroDetails = function ({selectedMunro, munroWeather}){

    console.log('Munro weather:', munroWeather);
    console.log('Selected Munro:', selectedMunro);

    if (selectedMunro !== null && munroWeather !== null){
        return (
            <>
            <div className='selected-munro'>
            <div className='munro-details'>
                <h4>{selectedMunro.name}</h4>
                <h5>{selectedMunro.region}</h5>
                <p>Name meaning: {selectedMunro.meaning}</p>
                <p>Height: {selectedMunro.height}m</p>
            </div>
            <div className='munro-weather'>
                {(munroWeather.list[0].dt_txt).slice(-11, -9)}/{(munroWeather.list[0].dt_txt).slice(-14, -12)} {(munroWeather.list[0].dt_txt).slice(-8, -3)}- {munroWeather.list[0].main.temp}&#8451;<br/>
                {(munroWeather.list[0].weather[0].description)[0].toUpperCase() + (munroWeather.list[0].weather[0].description).substring(1)}<br/>
                {(munroWeather.list[2].dt_txt).slice(-8, -3)}- {munroWeather.list[2].main.temp}&#8451;<br/>
                {munroWeather.list[2].weather[0].description}<br/>
                {(munroWeather.list[6].dt_txt).slice(-8, -3)}- {munroWeather.list[6].main.temp}&#8451;<br/>
                {munroWeather.list[6].weather[0].description}<br/>
                {(munroWeather.list[8].dt_txt).slice(-8, -3)}- {munroWeather.list[8].main.temp}&#8451;<br/>
                {munroWeather.list[8].weather[0].description}<br/>

            </div>
            </div>
            </>
        );
    } else {
        return (null)
    };
};

export default MunroDetails;