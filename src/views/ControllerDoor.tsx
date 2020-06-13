import React, { FC } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/PageTitle";

interface IControllerDoorProps {
  match: { params: { id: string } };
}

const ControllerDoor: FC<IControllerDoorProps> = ({ match }) => {
  const { id } = match.params;
  const controller = {
    name: id,
    id: id,
  };
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title={controller.name}
          subtitle="ControllerDoor"
          className="text-sm-left mb-3"
        />
      </Row>
      <Row>
        <Col sm="12" className="mb-4">
          <p>ControllerDoor</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ControllerDoor;
