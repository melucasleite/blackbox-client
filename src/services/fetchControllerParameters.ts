export const fetchControllerParameters = (controllerId: string): object => {
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
