import React, { useEffect, useState } from 'react';
import fakeData from '../api json/MOCK_DATA.json';
import './Card.css'


const Card = (props) => {
    let [count, setCount] = useState([]);
    
    useEffect(() => {
        setCount(fakeData)
    }, [])

    let images = count.map(crs => crs.Image2);
    let course = count.map(crs => crs.Course);
    let price = count.map(crs => crs.Price);

    
    // console.log(count);
    return (
        <div className='Card'>
            <div className="left">
            <img src={images} alt="" />
                <h2>{course}</h2>
                <br />
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Card;