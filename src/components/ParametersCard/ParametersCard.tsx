import React, { FC, useCallback, useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "shards-react";
import ParametersForm from "components/ParametersForm";
import {
  fetchControllerParameters,
  updateControllerParameters,
} from "services";
import swal from "sweetalert";
import Loading from "components/Loading";
import Controller from "models/Controller";

export interface IParametersCardProps {
  controller: Controller;
}

const ParametersCard: FC<IParametersCardProps> = ({ controller }) => {
  const [controllerParameters, setControllerParameters] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (input: {}) => {
    await updateControllerParameters(controller.id, input);
    await swal("Ok", "Parameters updated.", "success");
    await fetchData();
  };

  const fetchData = useCallback(async () => {
    const parameters = await fetchControllerParameters(controller.id);
    setControllerParameters(parameters);
    setIsLoading(false);
  }, [controller.id]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData]);
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="">Controller parameters</h6>
      </CardHeader>
      <CardBody className="pb-3">
        {isLoading ? (
          <Loading />
        ) : (
          <ParametersForm
            parameters={controllerParameters}
            handleSubmit={handleSubmit}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default ParametersCard;
