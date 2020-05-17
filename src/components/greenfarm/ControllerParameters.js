import React from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormCheckbox,
  FormGroup,
  FormInput,
  FormSelect,
  Row,
} from "shards-react";

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
];

const rows = [
  { id: 0, title: "Example" },
  { id: 1, title: "Demo" },
];

const ControllerParameters = () => {
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="">Controller parameters</h6>
          </CardHeader>
          <CardBody className="pb-3">
            <Form>
              <FormGroup>
                <label htmlFor="feInputAddress">Name</label>
                <FormInput id="feInputAddress" placeholder="1234 Main St" />
              </FormGroup>
              <FormGroup>
                <Row form>
                  <Col md="4" className="form-group">
                    <label htmlFor="feInputCity">P</label>
                    <FormInput id="feInputCity" />
                  </Col>
                  <Col md="4" className="form-group">
                    <label htmlFor="feInputZip">I</label>
                    <FormInput id="feInputZip" />
                  </Col>
                  <Col md="4" className="form-group">
                    <label htmlFor="feInputZip">D</label>
                    <FormInput id="feInputZip" />
                  </Col>
                </Row>
              </FormGroup>
              <Row form>
                <Col xs="6">
                  <h6>Process Variable</h6>
                  <div className="border-right pr-3">
                    <FormGroup>
                      <label>Input Port</label>
                      <FormSelect id="feInputState">
                        <option>A0</option>
                        <option>A1</option>
                        <option>A2</option>
                        <option>A3</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup>
                      <label>Input Multiplier</label>
                      <FormInput type="number" value={1} />
                    </FormGroup>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="pl-2">
                    <h6>Output</h6>
                    <FormGroup>
                      <label>Output pin</label>
                      <FormSelect id="feInputState">
                        <option>D0</option>
                      </FormSelect>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
              <Button type="submit">Create New Account</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ControllerParameters;
