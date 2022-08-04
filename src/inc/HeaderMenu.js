import React from 'react';
import './HeaderMenu.css';
import { Link } from "react-router-dom";

function HeaderMenu() {
    return (
        <div className="Header__MainMenu">
            <nav className="menu">
                <ul className="disf contentCenter">
                    <Link to="/"><li>Home</li></Link>
                    <li>About Us</li>
                    <li>Shop</li>
                    <Link to="/product"><li>Product</li></Link>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu
