import React from 'react';

//Se pasa la props porque me da que counter no esta definido
const GetMultiple = ({ counter }) => {
    if(counter % 5 === 0) {
        return (
            <div>
                <h2>Es multiplo de 5</h2>
            </div>
        )
    } else if(counter % 3 === 0) {
        return (
            <div>
                <h2>Es multiplo de tres</h2>
            </div>
        )
    }else if(counter % 2 === 0) {
        return (
            <div>
                <h2>Es multiplo de dos</h2>
            </div>
        )
    }
};

export default GetMultiple;