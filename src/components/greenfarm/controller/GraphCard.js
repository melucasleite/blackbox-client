import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  ButtonGroup,
  Button,
} from "shards-react";

import PidGraph from "./PidGraph";
import { getRandomVector } from "../../../utils";

const GraphCard = (props) => {
  const [dataset, setDataset] = useState(randomData);

  useEffect(() => {
    const timer = setTimeout(() => {
      onButtonClick();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const onButtonClick = () => {
    setDataset(randomData);
  };

  const { title } = props;
  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
        <div className="block-handle" />
      </CardHeader>

      <CardBody className="pt-0">
        <Row className="border-bottom py-2 bg-light">
          <Col sm="6" className="col d-flex mb-2 mb-sm-0">
            <ButtonGroup>
              <Button theme="white" active>
                5s
              </Button>
              <Button theme="white" onClick={onButtonClick}>
                1m
              </Button>
              <Button theme="white">1h</Button>
              <Button theme="white">4h</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <PidGraph dataset={dataset} />
      </CardBody>
    </Card>
  );
};

const randomData = () => {
  return {
    target: getRandomVector(30),
    reading: getRandomVector(30),
    output: getRandomVector(30),
    labels: getRandomVector(30),
  };
};

export default GraphCard;
