import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            exact
            to='/inbox'
            className='router-link'
            activeClassName='router-link--active'
          >
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/favorites'
            className='router-link'
            activeClassName='router-link--active'
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/sent'
            className='router-link'
            activeClassName='router-link--active'
          >
            Sent
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/not-exist'
            className='router-link'
            activeClassName='router-link--active'
          >
            404 Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
