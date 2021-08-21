import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import '../../styles/layout/_nav.scss';
const Nav = () => {
  const listRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const menu = () => {
    if (showMenu === true) {
      setShowMenu(false);
      listRef.current.classList.toggle('list__items-show');
    } else if (showMenu === false) {
      setShowMenu(true);
      listRef.current.classList.toggle('list__items-show');
    }
  };

  return (
    <nav className='navbar'>
      <span className='navbar__logo'>Casallas</span>
      <ul ref={listRef} className='list__items'>
        <li className='list__item'>
          <Link onClick={menu} to='inicio' smooth={true} className='list__item-link'>
            Home
          </Link>
        </li>
        <li className='list__item'>
          <Link onClick={menu} to='aboutme' smooth={true} className='list__item-link'>
            About me
          </Link>
        </li>
        <li className='list__item'>
          <Link onClick={menu} to='projects' smooth={true} className='list__item-link'>
            Projects
          </Link>
        </li>
        <li className='list__item'>
          <Link onClick={menu} to='contact' smooth={true} className='list__item-link'>
            Contact
          </Link>
        </li>
      </ul>
      <span onClick={menu} className='navbar__menu'>
        {showMenu ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </span>
    </nav>
  );
};

export default Nav;
