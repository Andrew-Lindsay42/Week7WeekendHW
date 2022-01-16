import React, {useEffect, useState} from 'react';
import MunroList from '../components/MunroList';
import MunroDetails from '../components/MunroDetails';
import FilterBox from '../components/FilterBox';

const MunroContainer = function (){

    const [allMunros, setAllMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);
    const [munroWeather, setMunroWeather] = useState(null);
    const [filter, setFilter] = useState({text: '', region: ''});
    const [viewMap, setViewMap] = useState(false);

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

        const setIcon = (icon) => {

            if (icon < 233){return icon = 'fas fa-poo-storm'};
            if (icon < 311) {return icon = 'fas fa-cloud-sun-rain'};
            if (icon === 500) {return icon = 'fas fa-cloud-sun-rain'};
            if (icon === 520) {return icon = 'fas fa-cloud-sun-rain'};
            if (icon === 521) {return icon = 'fas fa-cloud-sun-rain'};
            if (icon < 532) {return icon = 'fas fa-cloud-showers-heavy'};
            if (icon < 623) {return icon = 'fas fa-snowflake'};
            if (icon < 782) {return icon = 'fas fa-smog'};
            if (icon === 800) {return icon = 'fas fa-sun'};
            if (icon < 803) {return icon = 'fas fa-cloud-sun'};
            
            return icon = 'fas fa-cloud'
        }

        let details = [];
        for (let i = 0; i < 7; i += 2) {
            details.push({
                date: beautifyDate(munroWeather.list[i].dt_txt),
                temp: (munroWeather.list[i].main.temp).toFixed(1),
                icon: setIcon(munroWeather.list[i].weather[0].id),
                description: ((munroWeather.list[i].weather[0].description)[0].toUpperCase() + (munroWeather.list[i].weather[0].description).substring(1))
            })
        }
        setMunroWeather(details);
    }

    const checkFilter = (munro) => {
        return ((munro.name.toUpperCase().includes(filter.text.toUpperCase())) && (munro.region.includes(filter.region)))
    }

    return (
        <>
        <h1>Munro Weather <i className="fas fa-mountain"/> <i className="fas fa-cloud-sun-rain"/></h1>
        <FilterBox filter={filter} setFilter={setFilter}/>
        <div className='munro-container'>
            <MunroList allMunros = {allMunros} munroSelected = {munroSelected} checkFilter = {checkFilter} setViewMap = {setViewMap}/>
            <MunroDetails selectedMunro = {selectedMunro} munroWeather={munroWeather} setSelectedMunro={setSelectedMunro} viewMap = {viewMap} setViewMap = {setViewMap}/>
        </div>
        <footer>- fin -</footer>
        </>
    );
};

export default MunroContainer;