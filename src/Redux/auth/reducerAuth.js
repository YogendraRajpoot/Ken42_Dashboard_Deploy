import { is_Login, Login, Token, User_Name } from "./actionAuth";

const initState = {
  isLogin: false,
  token: "",
  username: "",
}
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case is_Login:
      return {
        ...state,
        isLogin: action.payload,
      };

    case Login:
      return {
        ...state,
        user: { ...action.payload },
      };
    case Token:
      return {
        ...state,
        token: action.payload,
      };
    case User_Name:
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
