import React, { FC } from "react";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "components/MainNavbar/MainNavbar";
import MainSidebar from "components/MainSidebar/MainSidebar";
import MainFooter from "components/MainFooter/MainFooter";

const DefaultLayout: FC = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <MainSidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          <MainNavbar />
          {children}
          <MainFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;
