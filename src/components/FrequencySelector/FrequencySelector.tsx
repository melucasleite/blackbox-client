import React, { FC } from "react";
import ControlledButtonGroup from "../ControlledButtonGroup/ControlledButtonGroup";

export interface IFrequencySelector {
  active: string | number;
  setActive: Function;
}

const FrequencySelector: FC<IFrequencySelector> = ({ active, setActive }) => {
  const options = [
    {
      name: "5s",
      value: 5,
    },
    {
      name: "1m",
      value: 60,
    },
    {
      name: "1h",
      value: 60 * 60,
    },
    {
      name: "4h",
      value: 60 * 60 * 4,
    },
    {
      name: "24h",
      value: 60 * 60 * 24,
    },
  ];

  return (
    <ControlledButtonGroup
      active={active}
      setActive={setActive}
      options={options}
    />
  );
};

export default FrequencySelector;
