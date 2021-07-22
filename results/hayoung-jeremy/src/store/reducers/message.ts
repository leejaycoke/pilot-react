import {
  CLEAR_ERROR_MESSAGE,
  IErrorMessageAction,
  SET_ERROR_MESSAGE,
} from "../actions/actionTypes";

const initialState = "";

export const errorMessageReducer = (
  state = initialState,
  action: IErrorMessageAction
) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return state;
    case CLEAR_ERROR_MESSAGE:
      return state;
    default:
      return state;
  }
};
