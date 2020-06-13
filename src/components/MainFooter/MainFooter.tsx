import React, { FC } from "react";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

interface IMainFooterProps {
  contained?: any;
  menuItems?: any;
  copyright?: string;
}

const MainFooter: FC<IMainFooterProps> = ({
  contained,
  menuItems,
  copyright,
}) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        <Nav>
          {menuItems.map((item: any, idx: any) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.defaultProps = {
  contained: false,
  copyright: "",
  menuItems: [
  ],
};

export default MainFooter;
