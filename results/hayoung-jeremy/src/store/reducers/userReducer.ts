import { LOGIN_USER, LoginActionTypes } from "../actions/actionTypes";

const userReducer = (state = {}, action: LoginActionTypes) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
  }
};

export default userReducer;
