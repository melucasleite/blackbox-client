import React, { FC } from "react";
import { Button, ButtonGroup } from "shards-react";

export type Option = {
  value: string | number;
  name: string;
};

export type IControlledButtonGroupProps = {
  active: string | number;
  setActive: Function;
  options: Option[];
};

const ControlledButtonGroup: FC<IControlledButtonGroupProps> = ({
  active,
  setActive,
  options,
}) => {
  const isActive = (value: number | string) => {
    return value === active;
  };
  return (
    <ButtonGroup>
      {options.map((option) => {
        return (
          <Button
            theme="white"
            key={option.value}
            onClick={() => setActive(option.value)}
            active={isActive(option.value)}
          >
            {option.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ControlledButtonGroup;
