import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>ASAC Help Desk</li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
