import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <img src="./img/logo_eg.png" alt="" />

        <ul>
            <li>Pinceles</li>
            <li>Rodillos</li>
            <li>Escaleras</li>
        </ul>

      < CartWidget />
    </header>
  )
}

export default NavBar