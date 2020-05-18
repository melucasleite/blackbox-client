import React, { useCallback, useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "shards-react";
import ParametersForm from "./ParametersForm";
import {
  fetchControllerParameters,
  updateControllerParameters,
} from "../../../utils/api";
import swal from "sweetalert";

const ParametersCard = ({ controller }) => {
  const [controllerParameters, setControllerParameters] = useState({});

  const handleSubmit = async (input) => {
    await updateControllerParameters(input);
    await swal("Ok", "Parameters updated.", "success");
    await fetchData();
  };

  const fetchData = useCallback(async () => {
    const parameters = await fetchControllerParameters(controller.id);
    setControllerParameters(parameters);
  }, [controller.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="">Controller parameters</h6>
      </CardHeader>
      <CardBody className="pb-3">
        <ParametersForm
          parameters={controllerParameters}
          handleSubmit={handleSubmit}
        />
      </CardBody>
    </Card>
  );
};

export default ParametersCard;
