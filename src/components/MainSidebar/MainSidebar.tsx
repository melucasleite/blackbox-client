import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../flux";

interface IMainSideBarProps {}

const MainSidebar: FC<IMainSideBarProps> = () => {
  const [, setSidebarNavItems] = useState(Store.getSidebarItems());
  const [menuVisible, setMenuVisible] = useState(false);

  const onChange = () => {
    setMenuVisible(Store.getMenuState());
    setSidebarNavItems(Store.getSidebarItems());
  };

  useEffect(() => {
    Store.addChangeListener(onChange);
    return function cleanup() {
      Store.removeChangeListener(onChange);
    };
  });

  const classes = classNames(
    "main-sidebar",
    "px-0",
    "col-12",
    menuVisible && "open"
  );

  return (
    <Col tag="aside" className={classes} lg={{ size: 2 }} md={{ size: 3 }}>
      <SidebarMainNavbar />
      <SidebarNavItems />
    </Col>
  );
};

export default MainSidebar;
