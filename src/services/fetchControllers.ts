export const fetchControllers = () => {
  console.log("fetchControllers");
  const controllers = [
    { name: "TIC_101", id: "TIC_101", type: "pid" },
    { name: "GIC_101", id: "GIC_101", type: "pid" },
    { name: "HIC_101", id: "HIC_101", type: "pid" },
    { name: "DIC_101", id: "DIC_101", type: "output" },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(controllers);
    }, 650);
  });
};
