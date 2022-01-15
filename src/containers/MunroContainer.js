import React, {useEffect, useState} from 'react';
import MunroList from '../components/MunroList';
import MunroDetails from '../components/MunroDetails';
import FilterBox from '../components/FilterBox';

const MunroContainer = function (){

    const [allMunros, setAllMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);
    const [filter, setFilter] = useState('');
    const [munroWeather, setMunroWeather] = useState(null);

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
        .then(weather => setMunroWeather(weather))
    };

    return (
        <>
        <h2>Hello from MunroContainer</h2>
        <FilterBox setFilter={setFilter}/>
        <div className='munro-container'>
            <MunroList allMunros = {allMunros} munroSelected = {munroSelected} filter = {filter}/>
            <MunroDetails selectedMunro = {selectedMunro} munroWeather = {munroWeather}/>
        </div>
        </>
    );
};

export default MunroContainer;