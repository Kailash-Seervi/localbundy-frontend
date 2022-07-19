
const initialState = {
    msg: {},
    status: null,
  };
  
  const alertReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MESSAGES":
        return {
          msg: action.payload.msg,
          status: action.payload.status,
        };
      case "CLEAR_MESSAGES":
          return initialState;
      default:
        return state;
    }
  }
  
  export const returnMessages = (msg, status) => {
    return {
      type: "GET_MESSAGES",
      payload: { msg, status },
    };
  };
  
  export const clearMessages = () => {
      return {
        type: "CLEAR_MESSAGES",
      };
  };
  
  
  export default alertReducer;