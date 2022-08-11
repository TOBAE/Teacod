import React from 'react'


const Navbar = () => {
  return (
    <>
    
    <nav className='nav'>

    <div className='logo'>
      <h1><span className='logo_span'>t</span>eacod</h1>
    </div>

    <ul className='nav_items'>
      <li>home</li>
      <li>menu</li>
      <li>about us</li>
      <li>contact</li>
    </ul>

    <div className="cart">
      <div className='cart_item cart_fix'>
         <i class="fa fa-search"></i>
      </div>

      <div className='cart_item cart_fix'>
         <i class="fa fa-cart-plus"></i>
      </div>

      <div className='cart_item cart_fix2'>
          <p className='log_text'>log in</p>
      </div>
      
    </div>

    </nav>

    </>
  )
}

export default Navbar