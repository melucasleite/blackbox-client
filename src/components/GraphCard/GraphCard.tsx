import React, { FC, useEffect, useState } from "react";
import { Card, CardBody, Row, Col } from "shards-react";

import PidGraph, { PidDataset } from "../PidGraph/PidGraph";
import { fetchPidGraph } from "services/fetchPidGraph";
import FrequencySelector from "components/FrequencySelector";
import Loading from "../Loading";
import Controller from "models/Controller";

export interface IGraphCardProps {
  controller: Controller;
}

const GraphCard: FC<IGraphCardProps> = ({ controller }) => {
  const emptyDataset: PidDataset = {
    output: [],
    reading: [],
    labels: [],
    target: [],
  };
  const [dataset, setDataset] = useState(emptyDataset);
  const [scale, setScale] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const refreshFrequency = 3000;

  useEffect(() => {
    setIsLoading(true);
    const loadGraph = async () => {
      const dataset = await fetchPidGraph(controller.id, scale);
      setDataset(dataset);
      setIsLoading(false);
    };
    loadGraph();
    const timer = setInterval(loadGraph, refreshFrequency);
    return () => clearTimeout(timer);
  }, [controller.id, scale]);

  return (
    <Card small className="h-100">
      {isLoading ? (
        <Loading />
      ) : (
        <CardBody>
          <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="col d-flex mb-2 mb-sm-0">
              <FrequencySelector active={scale} setActive={setScale} />
            </Col>
          </Row>
          <PidGraph dataset={dataset} />
        </CardBody>
      )}
    </Card>
  );
};

export default GraphCard;
