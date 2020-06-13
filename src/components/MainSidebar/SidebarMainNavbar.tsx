import React, { FC } from "react";
import { Navbar, NavbarBrand } from "shards-react";

import { Dispatcher, Constants } from "../../flux";

interface ISidebarMainNavbarProps {
}

const SidebarMainNavbar: FC<ISidebarMainNavbarProps> = () => {
  const handleToggleSidebar = () => {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR,
    });
  };

  return (
    <div className="main-navbar">
      <Navbar
        className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
        type="light"
      >
        <NavbarBrand
          className="w-100 mr-0"
          href="#"
          style={{ lineHeight: "25px" }}
        >
          <div className="d-table m-auto">
            <span className="d-md-inline ml-1">Greenfarm</span>
          </div>
        </NavbarBrand>
        {/* eslint-disable-next-line */}
        <a
          className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          onClick={handleToggleSidebar}
        >
          <i className="material-icons">&#xE5C4;</i>
        </a>
      </Navbar>
    </div>
  );
};

export default SidebarMainNavbar;
