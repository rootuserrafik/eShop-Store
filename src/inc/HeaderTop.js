import React from 'react'
import './HeaderTop.css'
import HeaderMenu from './HeaderMenu';
import { Link } from "react-router-dom";
import Logo from '../img/eshop-logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function HeaderTop() {
    return (
        <div className="HeaderTop__Bar disf jcsb">
            <Link to="/"><img src={Logo} alt="Logo" className="Logo"/></Link>
            <HeaderMenu />
            <span className="rightContent disf">
                <AccountCircleIcon className="topMenuIcons" style={{ fontSize: 36 }}  />
                <NotificationsIcon className="topMenuIcons" style={{ fontSize: 36 }}  />
                <ShoppingCartIcon className="topMenuIcons shopCountOps" style={{ fontSize: 36 }}  />
                <span className="shopCount">99</span>
            </span>
        </div>
    )
}

export default HeaderTop
