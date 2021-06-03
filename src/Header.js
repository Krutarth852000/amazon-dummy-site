import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
                {/* Logo */}
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLine1">
                        Hello 
                    </span>
                    <span className="header_optionLine2">
                       Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">
                        Returns
                    </span>
                    <span className="header_optionLine2">
                       & orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">
                      Your 
                    </span>
                    <span className="header_optionLine2">
                       Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLine2 header_basketCount">0</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
