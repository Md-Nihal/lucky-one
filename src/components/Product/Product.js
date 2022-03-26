import React, { useEffect, useState } from 'react';
import List from '../List/List';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='product-container'>
           
            <div className="list-container ">
                 
            {
                products.map(product=><List
                product={product}
                key={product.id}
                ></List>)
            }
            </div>
            <div className="favourite-container ">
            <h1>Gello</h1>
            </div>
        </div>
    );
};

export default Product;