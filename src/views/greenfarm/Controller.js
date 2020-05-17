import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import ControllerParameters from '../../components/greenfarm/ControllerParameters'
import GraphCard from '../../components/greenfarm/controller/GraphCard'
import ParametersCard
  from '../../components/greenfarm/controller/ParametersCard'

const Controller = (props) => {
  const { controller } = props;
  const { id } = props.match.params;
  controller.id = id;
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title={controller.id}
          subtitle="Controller"
          className="text-sm-left mb-3"
        />
      </Row>
      <Row>
        <Col sm="12" className="mb-4">
          <GraphCard controller={controller} />
        </Col>
        <Col sm="12">
          <ParametersCard controller={controller}/>
        </Col>
      </Row>
    </Container>
  );
};

Controller.defaultProps = {
  controller: {
    name: "TIC 101",
  },
};

export default Controller;