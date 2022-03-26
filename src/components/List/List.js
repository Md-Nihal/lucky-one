import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './List.css'

const List = (props) => {
    const{addToFavourite}=props;
    const{ img, name, price} = props.product;
    return (
        
        <div className='card'>
          <img src={img} alt="" />
          <h2 className='text'>{name}</h2>
          <p className='price'>Price:${price}</p>
            
          <button onClick={()=>addToFavourite(props.product)} className='btn'>
              <p  className='add'>Add To Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
          
        </div>
    );
};

export default List;