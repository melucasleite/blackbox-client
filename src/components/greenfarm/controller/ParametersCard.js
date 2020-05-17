import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader } from "shards-react";
import ParametersForm from "./ParametersForm";

const ParametersCard = (controller) => {
  const [parameters, setParameters] = useState({
    name: "",
    P: "",
    I: "",
    D: "",
    inputPort: "",
    outputPort: "",
    inputMultiplier: "",
  });

  const [isLoading, setIsloading] = useState(true);

  const loaderParams = () => {
    setParameters({
      name: "TIC_101",
      P: "1",
      I: "2",
      D: "3",
      inputPort: "A0",
      outputPort: "D12",
      inputMultiplier: "1.0",
    });
    setIsloading(false);
  };

  const handleSubmit = (input) => {
    setParameters(input);
  };

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="">Controller parameters</h6>
      </CardHeader>
      <CardBody className="pb-3">
        <ParametersForm parameters={parameters} handleSubmit={handleSubmit} />
      </CardBody>
    </Card>
  );
};

export default ParametersCard;
