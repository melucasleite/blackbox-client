import { getRandomVector } from "../utils";

export const fetchPidGraph = (controllerId, scale) => {
  console.log(controllerId, scale);
  const points = 30;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        target: getRandomVector(points),
        reading: getRandomVector(points),
        output: getRandomVector(points),
        labels: getRandomVector(points),
      });
    }, 150);
  });
};
