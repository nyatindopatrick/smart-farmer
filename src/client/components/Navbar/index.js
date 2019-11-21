import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div class='container'>
        <a class='navbar-brand' href='#'>
          Smart Farmer
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarResponsive'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item active'>
              <Link class='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/services'>
                Services
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/events'>
                Events
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
