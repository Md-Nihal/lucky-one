import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './List.css'
const List = (props) => {
    const{id, img, name, price} = props.product;
    return (
        <div className='card'>
            <div className='card-img'>
            <img src={img} alt="" />
            </div>
            <div className='card-info'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            
            </div>
            <button className='button'>
                <p className='btn-text'>buy</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default List;