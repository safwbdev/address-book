import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// console.log(rootReducer);

const rootReducer = combineReducers({ contacts: contactReducer });

export default rootReducer;
