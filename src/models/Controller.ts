export default class Controller {
  id: string;
  name: string;
  P: number;
  I: number;
  D: number;
  inputPort: string;
  outputPort: string;
  inputMultiplier: number;
  constructor(
    id: string,
    name: string,
    P: number,
    I: number,
    D: number,
    inputPort: string,
    outputPort: string,
    inputMultiplier: number
  ) {
    this.id = id;
    this.name = name;
    this.P = P;
    this.I = I;
    this.D = D;
    this.inputPort = inputPort;
    this.outputPort = outputPort;
    this.inputMultiplier = inputMultiplier;
  }
}
