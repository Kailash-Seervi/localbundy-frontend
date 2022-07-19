import { combineReducers } from "redux";

import authReducer from "./auth";
import errorAlertReducer from "./errAlerts";
import msgAlertReducer from "./msgAlerts";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        authReducer,
        errorAlertReducer,
        msgAlertReducer
    ],
  };
  
  const rootReducer = combineReducers({
    auth:authReducer,
    error:errorAlertReducer,
    message:msgAlertReducer
  });


  
export default persistReducer(persistConfig, rootReducer);
