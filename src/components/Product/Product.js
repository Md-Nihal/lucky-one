import React, { useEffect, useState } from 'react';
import Favourite from '../Favourite/Favourite';
import List from '../List/List';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState({})
    

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const addToFavourite = (product) =>{
        let mainBox = [...cart, product]
        if(mainBox.length <= 4 && product !== true){
        setCart(mainBox);
        }

        else{
            alert ('you cant add more')
        }
     
    
    }

    function randomHandler(cart){
        const random = Math.floor(Math.random() * cart.length)
        setRandom(random)
    }
    
    return (
        <div className='product-container'>
           
            <div className="list-container ">
                 
            {
                products.map(product=><List
                addToFavourite={addToFavourite}
                product={product}
                key={product.id}
                ></List>)
            }

            </div>
            <div className="favourite-container">
            <h1>Hello cart</h1>
            
             <Favourite cart = {cart} randomHandler= {randomHandler}>
                    

                </Favourite>
           
                <div class="d-grid gap-2">
            <button class="btn btn-primary" onClick={()=>randomHandler(random)} type="button">Choose One for me</button>
            <button class="btn btn-danger" type="button">Delete all</button>
            </div>
            </div>
        </div>
    );
};

export default Product;