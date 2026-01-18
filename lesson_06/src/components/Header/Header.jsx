import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const getClassName = ({ isActive }) => {
    const classes = [`nav_item`];
    isActive && classes.push(`nav_item--active`);
    return classes.join(` `);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/country" className={getClassName}>
              Country
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
