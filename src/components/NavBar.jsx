import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          {location.pathname === '/' ? (
            ''
          ) : (
            <FaAngleLeft onClick={() => navigate('/')} fontSize={20} />
          )}
        </li>
        <li>{location.pathname === '/' ? 'Company Information' : 'Details'}</li>

        <li>

          <FaMicrophone fontSize={20} style={{ marginRight: 20 }} />
          <FaRegSun fontSize={20} style={{ marginRight: 20 }} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
