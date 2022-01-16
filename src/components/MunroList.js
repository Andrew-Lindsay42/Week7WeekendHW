import React from 'react';
import Munro from './Munro';

const MunroList = function ({allMunros, munroSelected, checkFilter, setViewMap}){

    const MunroItems = allMunros.map((munro, index) => {
        
        if (checkFilter(munro)) {
        return <Munro munro = {munro} key = {index} munroSelected = {munroSelected} setViewMap = {setViewMap}/>
        }
        return null
    })

    return(
        <div className='munro-list'>
            {MunroItems}
        </div>
    );
};

export default MunroList;