import React, { FC } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { NavItem, DropdownMenu, DropdownItem, Collapse } from "shards-react";
import { Dispatcher, Constants } from "../../flux";

interface ISidebarNavItemProps {
  item: any;
}

const SidebarNavItem: FC<ISidebarNavItemProps> = ({ item }) => {
  const toggleDropdown = (item: any) => {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR_DROPDOWN,
      payload: item,
    });
  };

  const hasSubItems = item.items && item.items.length;

  return (
    <NavItem style={{ position: "relative" }}>
      <NavLink
        className="nav-link"
        to={hasSubItems ? "#" : item.to}
        onClick={() => toggleDropdown(item)}
      >
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </NavLink>
      {hasSubItems && (
        <Collapse tag={DropdownMenu} small open={item.open} style={{ top: 0 }}>
          {item.items.map((subItem: any, idx: any) => (
            <DropdownItem key={idx} tag={NavLink} to={subItem.to}>
              {subItem.title}
            </DropdownItem>
          ))}
        </Collapse>
      )}
    </NavItem>
  );
};

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object,
};

export default SidebarNavItem;
