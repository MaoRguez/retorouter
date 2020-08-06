import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/001-home.svg';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link className="nav-link" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="navbar-nav mr-auto mx-auto order-0">
            <li className="nav-item">
              <Link className="navbar-brand nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
          <div>
            <button type="button" className="btn btn-dark mr-2">Log In</button>
            <button type="button" className="btn btn-dark mr-2">Sing Up</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;