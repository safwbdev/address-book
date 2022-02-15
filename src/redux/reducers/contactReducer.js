// import { dummyData } from "../../constants/dummyData";
import { CONTACT_ADD, CONTACT_REMOVE } from "../action/actiontypes";

// const contactReducer = (state = dummyData, action) => {
const contactReducer = (state = [], action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return [...state, action.payload];
    case CONTACT_REMOVE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default contactReducer;
