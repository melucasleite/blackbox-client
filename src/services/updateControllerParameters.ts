export const updateControllerParameters = (
  controllerId: string,
  parameters: any
) => {
  console.log("updateControllerParameters", controllerId, parameters);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 115);
  });
};
