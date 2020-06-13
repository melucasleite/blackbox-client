import { getRandomVector } from "utils";
import { PidDataset } from "../components/PidGraph/PidGraph";

export const fetchPidGraph = (
  controllerId: string,
  scale: number,
  dataPoints: number = 20
): Promise<PidDataset> => {
  console.log("fetchPidGraph", controllerId, scale, dataPoints);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        target: getRandomVector(dataPoints),
        reading: getRandomVector(dataPoints),
        output: getRandomVector(dataPoints),
        labels: (getRandomVector(dataPoints) as unknown) as string[],
      });
    }, 800);
  });
};
