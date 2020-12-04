import initialState from "../initialState";

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "navigation/open":
      return {
        ...state,
        isOpen: true,
      };

    case "navigation/close":
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default navigationReducer;
