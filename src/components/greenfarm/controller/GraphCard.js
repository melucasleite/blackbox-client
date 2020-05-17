import React, { useEffect, useState } from "react";
import { Card, CardBody, Row, Col } from "shards-react";

import PidGraph from "./PidGraph";
import { fetchPidGraph } from "../../../utils/api";
import TimeScale from "./TimeScale";

const GraphCard = ({ controller }) => {
  const [dataset, setDataset] = useState({});
  const [scale, setScale] = useState(5);
  const refreshFrequency = 3000;

  useEffect(() => {
    const timer = setInterval(async () => {
      const dataset = await fetchPidGraph(controller.id, scale);
      setDataset(dataset);
    }, refreshFrequency);
    return () => clearTimeout(timer);
  }, [controller.id, scale]);

  return (
    <Card small className="h-100">
      <CardBody>
        <Row className="border-bottom py-2 bg-light">
          <Col sm="6" className="col d-flex mb-2 mb-sm-0">
            <TimeScale active={scale} setActive={setScale} />
          </Col>
        </Row>
        <PidGraph dataset={dataset} />
      </CardBody>
    </Card>
  );
};

export default GraphCard;
