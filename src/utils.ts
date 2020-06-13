import { useState } from "react";

export const getRandomVector = (length: number): number[] => {
  return [...Array(length)].map(() => {
    return Math.floor(Math.random() * Math.floor(100));
  });
};

export interface Click {
  currentTarget: {
    name: string;
    value: string;
  };
}

export const useInputChange = (defaults: any) => {
  const [input, setInput] = useState(defaults);

  const handleInputChange = (e: Click) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return [input, handleInputChange, setInput];
};
