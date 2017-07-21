import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src="../images/icon.png" alt="icon of a brain" className="headerIcon" />
        <div className="navigation">
          <ul className="navLinks">
            <li><Link to="/main">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
