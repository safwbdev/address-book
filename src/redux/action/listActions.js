import { CONTACT_ADD, CONTACT_REMOVE } from "./actiontypes";

export const addContact = (data) => async (dispatch) =>
  dispatch({ type: CONTACT_ADD, payload: data });

export const removeContact = (id) => async (dispatch) => {
  dispatch({ type: CONTACT_REMOVE, payload: id });
};
export const updateContact = (id, data) => async (dispatch) => {
  dispatch({ type: CONTACT_REMOVE, payload: id });
  dispatch({ type: CONTACT_ADD, payload: data });
};
