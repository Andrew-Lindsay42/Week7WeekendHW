import React from 'react';
import Munro from './Munro';

const MunroList = function (){
    return(
        <div className='munro-list'>
            <h3>Hello from MunroList</h3>
            <Munro/>
            <Munro/>
            <Munro/>
        </div>

    );
};

export default MunroList;