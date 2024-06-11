import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import './Header.style.css';

const Header = () => {
  const [menuView, setMenuView] = useState(false);

  return (
    <div>
      <div className="header">
        <h1 className="heacer-logo"><Link to='/'>Yull Pic</Link></h1>
        <div className="main-menu">
          <div
            className={menuView? "menu-ham view" : "menu-ham"}
            onClick={() => setMenuView(!menuView)}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
          <ul className={menuView ? "menu-div view" : "menu-div"}>
            <li>
              <Link onClick={() => setMenuView(!menuView)} to='/photo'>PHOTOS</Link>
            </li>
            <li>
              <Link onClick={() => setMenuView(!menuView)} to='/notice'>NOTICE</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Header