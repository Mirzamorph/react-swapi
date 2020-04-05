import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand">
        Star Wars Api
      </Link>

      <ul className="navbar-nav mr-auto">
        <NavLink
          to="/"
          className="nav-item nav-link"
          activeClassName="active"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/starships"
          className="nav-item nav-link"
          activeClassName="active"
          exact
        >
          Starships
        </NavLink>
        <NavLink
          to="/planets"
          className="nav-item nav-link"
          activeClassName="active"
          exact
        >
          Planets
        </NavLink>
      </ul>
    </div>
  </nav>
);

export default Header;
