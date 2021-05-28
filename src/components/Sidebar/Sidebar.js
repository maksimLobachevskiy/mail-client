import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

class Sidebar extends PureComponent {
  render() {
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
        </ul>
      </div>
    );
  }
}

export default Sidebar;
