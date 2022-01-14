import React from 'react';
import MunroList from '../components/MunroList';
import MunroDetails from '../components/MunroDetails';

const MunroContainer = function (){
    return (
        <>
        <h2>Hello from MunroContainer</h2>
        <div className='munro-container'>
            <MunroList/>
            <MunroDetails/>
        </div>
        </>
);
};

export default MunroContainer;