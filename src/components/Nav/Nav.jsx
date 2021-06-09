import React from 'react';
import { Link } from 'react-scroll';
import '../../styles/layout/_nav.scss';
const Nav = () => {
  return (
    <nav className='navbar'>
      <span className='navbar__logo'>Casallas</span>
      <ul className='list__items'>
        <li className='list__item'>
          <Link to='inicio' smooth={true} className='list__item-link'>
            Home
          </Link>
        </li>
        <li className='list__item'>
          <Link to='aboutme' smooth={true} className='list__item-link'>
            About me
          </Link>
        </li>
        <li className='list__item'>
          <Link to='projects' smooth={true} className='list__item-link'>
            Projects
          </Link>
        </li>
        <li className='list__item'>
          <Link to='contact' smooth={true} className='list__item-link'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
