import { getRandomVector } from "../utils";

export const fetchPidGraph = (controllerId, scale, dataPoints = 20) => {
  console.log("fetchPidGraph", controllerId, scale, dataPoints);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        target: getRandomVector(dataPoints),
        reading: getRandomVector(dataPoints),
        output: getRandomVector(dataPoints),
        labels: getRandomVector(dataPoints),
      });
    }, 350);
  });
};

export const fetchControllerParameters = (controllerId) => {
  console.log("fetchControllerParameters", controllerId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: controllerId,
        P: 1.0,
        I: 2.5,
        D: 14,
        inputPort: "A12",
        outputPort: "D3",
        inputMultiplier: 4,
      });
    }, 500);
  });
};

export const updateControllerParameters = (controllerId, parameters) => {
  console.log("updateControllerParameters", controllerId, parameters);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 115);
  });
};
