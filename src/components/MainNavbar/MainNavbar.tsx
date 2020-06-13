import React, { FC } from "react";
import classNames from "classnames";
import { Container, Navbar, NavbarBrand } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav";
import NavbarToggle from "./NavbarToggle";

import { LAYOUT_TYPES } from "../../utils/constants";

interface IMainNavbarProps {
  layout?: any;
  stickyTop?: boolean;
}

const MainNavbar: FC<IMainNavbarProps> = ({ layout, stickyTop }) => {
  const isHeaderNav = layout === LAYOUT_TYPES.HEADER_NAVIGATION;
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container fluid={!isHeaderNav || null} className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          {isHeaderNav && (
            <NavbarBrand href="#" style={{ lineHeight: "25px" }}>
              <div className="d-table m-auto">
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1 ml-3"
                  style={{ maxWidth: "25px" }}
                  src={require("../../images/shards-dashboards-logo.svg")}
                  alt="Shards Dashboard"
                />
                <span className="d-none d-md-inline ml-1">
                  Shards Dashboard
                </span>
              </div>
            </NavbarBrand>
          )}
          <NavbarSearch />
          <NavbarNav />
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.defaultProps = {
  stickyTop: true,
};

export default MainNavbar;
