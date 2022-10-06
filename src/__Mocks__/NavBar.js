import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul className='nav-ul'>
        <li>pathname === '/' ? '' : 'details'</li>
        <li>pathname === '/' ? 'Company Information' : 'Details'</li>
      </ul>
    </nav>
  );
};

export default NavBar;
