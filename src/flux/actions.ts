import dispatcher from "./dispatcher";
import constants from "./types";

const Actions = {
  selectController(name: string) {
    dispatcher.dispatch({
      type: constants.SELECT_CONTROLLER,
      name,
    });
  },
};

export default Actions;
