import React from 'react';
import logo from '../logo.png'
// import './Header.scss'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} className='imgs'/>
            <nav >
                <a href="#" className='att'>course</a>
                <a href="#" className='att'>course</a>
                <a href="#" className='att'>course</a>
            </nav>
        </div>
    );
};

export default Header;