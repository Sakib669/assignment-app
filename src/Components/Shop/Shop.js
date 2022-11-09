import React, {useEffect, useState} from 'react';
import fakeData from '../api json/MOCK_DATA.json';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {

    let [count,setCount] =     useState ([]);

    useEffect(() => {
        setCount(fakeData);
    }, [])
    let [cart, setCart] = useState([]);

    let handleClick = (items) =>{
        let newItems = [...count, items];
        setCart(newItems);
    }

    return (
        <div className='shop-container'>
            <div className="left-side">
                {
                    count.map( pd => <Card count={pd} handleClick={handleClick}></Card>)
                }
            </div>
            <div className="right">
                <Cart count ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;