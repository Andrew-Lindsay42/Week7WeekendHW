import React, {useEffect, useState} from 'react';
import MunroList from '../components/MunroList';
import MunroDetails from '../components/MunroDetails';
import FilterBox from '../components/FilterBox';

const MunroContainer = function (){

    const [allMunros, setAllMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);
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
    };

    return (
        <>
        <h2>Hello from MunroContainer</h2>
        <FilterBox setFilter={setFilter}/>
        <div className='munro-container'>
            <MunroList allMunros = {allMunros} munroSelected = {munroSelected} filter = {filter}/>
            <MunroDetails selectedMunro = {selectedMunro}/>
        </div>
        </>
    );
};

export default MunroContainer;