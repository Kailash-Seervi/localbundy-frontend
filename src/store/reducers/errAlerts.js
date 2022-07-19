
const initialState = {
  msg: {},
  status: null,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ERRORS":
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    case "CLEAR_ERRORS":
        return initialState;
    default:
      return state;
  }
}

export const returnErrors = (msg, status) => {
    return {
      type: "GET_ERRORS",
      payload: { msg, status },
    };
};

export const clearErrors = () => {
    return {
      type: "CLEAR_ERRORS",
    };
};


export default alertReducer;