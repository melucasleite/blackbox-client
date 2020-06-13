import React, { FC, useEffect, useState } from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../flux";

interface ISidebarNavItemsProps {}

const SidebarNavItems: FC<ISidebarNavItemsProps> = () => {
  const [navItems, setNavItems] = useState(Store.getSidebarItems());
  const onChange = () => {
    setNavItems(Store.getSidebarItems());
  };

  useEffect(() => {
    Store.addChangeListener(onChange);
    return function cleanup() {
      Store.removeChangeListener(onChange);
    };
  });

  return (
    <div className="nav-wrapper">
      {navItems.map((nav, idx) => (
        <div key={idx}>
          <h6 className="main-sidebar__nav-title">{nav.title}</h6>
          {typeof nav.items !== "undefined" && nav.items.length && (
            <Nav className="nav--no-borders flex-column">
              {nav.items.map((item: any, idx: any) => (
                <SidebarNavItem key={idx} item={item} />
              ))}
            </Nav>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarNavItems;
