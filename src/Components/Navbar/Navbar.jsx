import React, { useState } from 'react'; 

import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState("boutique");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>RAISSA</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("boutique") }}><Link style={{textDecoration:'none'}} to={'/'}>Boutique</Link> {menu === "boutique" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("hommes") }}><Link style={{textDecoration:'none'}} to={'/hommes'}>Homme</Link> {menu === "hommes" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("femmes") }}><Link style={{textDecoration:'none'}} to={'/femmes'}>Femme</Link> {menu === "femmes" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("enfants") }}><Link style={{textDecoration:'none'}} to={'/enfants'}>Enfants</Link> {menu === "enfants" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
