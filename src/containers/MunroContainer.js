import React, {useEffect, useState} from 'react';
import MunroList from '../components/MunroList';
import MunroDetails from '../components/MunroDetails';
import FilterBox from '../components/FilterBox';

const MunroContainer = function (){

    const [allMunros, setAllMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);
    const [munroWeather, setMunroWeather] = useState(null);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getAllMunros()
    }, []);

    const getAllMunros = () => {
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setAllMunros(munros))
    };

    const munroSelected = (munro) => {
        setSelectedMunro(munro);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${munro.latlng_lat}&lon=${munro.latlng_lng}&appid=566e1e687d708fd7e5c3ee6c8325feca&units=metric`)
        .then(res => res.json())
        .then(weather => weatherDetails(weather))
    };

    const weatherDetails = (munroWeather) => {

        const beautifyDate = (date) => {
            let month = date.slice(-14, -12)
            let day = date.slice(-11, -9)
            let time = date.slice(-8, -3)
    
            return (`${day}/${month} ${time}`)
        }

        let details = [];
        for (let i = 0; i < 9; i += 2) {
            details.push({
                date: beautifyDate(munroWeather.list[i].dt_txt),
                temp: (munroWeather.list[i].main.temp).toFixed(1),
                description: ((munroWeather.list[i].weather[0].description)[0].toUpperCase() + (munroWeather.list[i].weather[0].description).substring(1))
            })
        }
        setMunroWeather(details);

    }

    return (
        <>
        <h2>Hello from MunroContainer</h2>
        <FilterBox setFilter={setFilter}/>
        <div className='munro-container'>
            <MunroList allMunros = {allMunros} munroSelected = {munroSelected} filter = {filter}/>
            <MunroDetails selectedMunro = {selectedMunro} munroWeather={munroWeather}/>
        </div>
        </>
    );
};

export default MunroContainer;