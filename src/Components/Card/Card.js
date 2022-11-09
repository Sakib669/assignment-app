import React from 'react';
import './Card.css';
import Plus from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Card = (props) => {
    // console.log(props)

    let {Course, Price , Image2} = props.count;
    
    return (
        <div className='Card'>
           <div className='left-product'>
                <img src={Image2}/>
           </div>
           <div className="right-product">
            <h2 className='product-name'>Product Name: {Course}</h2>
            <br />
            <h5>Price: {Price}$</h5>
            <button onClick={() => props.handleClick(props.count)} className='add-cart'> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add to Cart</button>
           </div>
        </div>
    );
};

export default Card;