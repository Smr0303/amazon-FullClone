import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='headerLogo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='logo'/>
        <div className='header_search'>
            <input className='headerInput' type="text"/>
            {/* Logo */}
        </div>
        <div className='headerNav'>
            <div className='headerOption'>
                <span className='headerOptionLineOn'>
                Hello Guest
                </span>
                <span className='headerOptionTw'>
                Sign In
                </span>
            </div>
            <div className='headerOption'>
                <span className='headerOptionLineOn'>
                 Return
                </span>
                <span className='headerOptionTw'>
                & Orders 
                </span>
            </div>
            <div className='headerOption'>
                <span className='headerOptionLineOn'>
                Your
                </span>
                <span className='headerOptionTw'>
                  Prime  
                </span>
            </div>
        </div>
    
    
    </div>
  )
}

export default Header