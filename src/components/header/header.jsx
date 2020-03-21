import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Star Wars Api</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/starships" className="nav-item nav-link" activeClassName="active" exact>Starships</NavLink>
            <NavLink to="/planets" className="nav-item nav-link" activeClassName="active" exact>Planets</NavLink>
          </ul>
        </div>
      </div>
  </nav>
  )
};

export default Header;