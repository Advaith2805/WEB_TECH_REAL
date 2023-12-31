import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Navbar = () =>{
    return(
        <div className='navbar'>
            <div className='navbar-title'>
                <Link to="/Home">
                    <h4>The Gaming Hub</h4>
                </Link>
            </div>
            <div className='navbarLinks'>
                <Link to="/Home"> What's New </Link>
                <Link to="/Home2">Trending</Link>
                <Link to="/Home3">Classics</Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </Link>
                <Link to="/about">About Us</Link>
                <Link to="/"> Logout </Link>
            </div>
        </div>
    );
};

export default Navbar;