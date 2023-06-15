import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  const getNavLinkClassName = (navPath) => {
    return `  font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:text-white ${
      path === navPath ? 'underline decoration-2 underline-offset-8 text-white' : 'text-gray-400'
    }`;
  };

  return (
    <div className="flex w-4/6 justify-between">
      <NavLink  to="/" className={getNavLinkClassName('/')}>
        Feed
      </NavLink>
      <NavLink  to="/post" className={getNavLinkClassName('/post')}>
        Projects
      </NavLink>
      <NavLink  to="/lab" className={getNavLinkClassName('/lab')}>
        Lab
      </NavLink>
    </div>
  );
};

export default NavBar;
