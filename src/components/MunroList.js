import React from 'react';
import Munro from './Munro';

const MunroList = function ({allMunros, munroSelected}){

    const MunroItems = allMunros.map((munro, index) => {
        return <Munro munro = {munro} key = {index} munroSelected = {munroSelected}/>
    })

    return(
        <div className='munro-list'>
            {MunroItems}
        </div>

    );
};

export default MunroList;