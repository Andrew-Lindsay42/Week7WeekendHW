import React, {useEffect, useState} from 'react';
import MunroList from '../components/MunroList';
import MunroDetails from '../components/MunroDetails';

const MunroContainer = function (){

    const [allMunros, setAllMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

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
        <div className='munro-container'>
            <MunroList allMunros = {allMunros} munroSelected = {munroSelected}/>
            <MunroDetails selectedMunro = {selectedMunro}/>
        </div>
        </>
    );
};

export default MunroContainer;