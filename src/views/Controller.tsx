import React, { FC } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/PageTitle";
import GraphCard from "../components/GraphCard/GraphCard";
import ParametersCard from "../components/ParametersCard/ParametersCard";

interface IControllerParams {
  match: { params: { id: string } };
}

const Controller: FC<IControllerParams> = ({ match }) => {
  const { id } = match.params;
  const controller = {
      id: id,
      name: id,
      P: 0,
      I: 0,
      D: 0,
      inputPort: id,
      outputPort: id,
      inputMultiplier: 0
  };
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title={controller.name}
          subtitle="Controller"
          className="text-sm-left mb-3"
        />
      </Row>
      <Row>
        <Col sm="12" className="mb-4">
          <GraphCard controller={controller} />
        </Col>
        <Col sm="12">
          <ParametersCard controller={controller} />
        </Col>
      </Row>
    </Container>
  );
};

export default Controller;
