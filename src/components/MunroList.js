import React from 'react';
import Munro from './Munro';

const MunroList = function ({allMunros}){

    const MunroItems = allMunros.map((munro, index) => {
        return <Munro munro = {munro} key = {index}/>
    })

    return(
        <div className='munro-list'>
            {MunroItems}
        </div>

    );
};

export default MunroList;