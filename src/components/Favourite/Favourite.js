import React from 'react';

const Favourite = ({cart, randomHandler}) => {

    return (
        <div >

        <p>selected items: {cart.length}</p>
            <h3>name: {cart.name}</h3>
           {
               cart.map((cart)=> <h3>{cart.name}</h3>)
           }
            

 

        </div>
    );
};

export default Favourite;