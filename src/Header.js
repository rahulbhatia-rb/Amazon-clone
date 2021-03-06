import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Ama"></img>
            <div className='header_search' >
                <input className="header_searchInput" type="text" />
                <SearchIcon className = 'header_searchIcon' />

                {/* Logo */}
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                 <span className='header_optionLineOne'>
                   Hello Guest
                </span>
                <span className='header_optionLineTwo'>
                  Sign In    
                  </span>  
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                  Returns    
                  </span>
                  <span className='header_optionLineTwo'>
                  & Orders    
                  </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                  Your    
                  </span>
                  <span className='header_optionLineTwo'>
                  Prime    
                  </span>
                </div>
                <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <span className = "header_optionLineTwo header_basketCount">0</span>

                </div>
                {/* <div className='header_option'>
                   <span className='header_optionLineFour'>
                     Your Cart
                    </span> 
                    </div>
                 */}
    
    

            </div>

        </div>
    )
}

export default Header;
