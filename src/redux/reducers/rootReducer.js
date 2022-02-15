import { combineReducers } from "redux";
import contacttReducer from "./contacttReducer";

// console.log(rootReducer);

const rootReducer = combineReducers({ contacts: contacttReducer });

export default rootReducer;
