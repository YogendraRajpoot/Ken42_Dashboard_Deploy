import { saveData } from "../../Utils/localStorage";

export const is_Login = "is_Login";
export const Login = "Login";
export const Token = "Token";
export const User_Name = "UserName";
export const Login_User = "Login_User";

export const islogin = (payload) => ({
  type: is_Login,
  payload,
});

export const login = (payload) => ({
  type: Login,
  payload,
});
export const istoken = (payload) => ({
  type: Token,
  payload,
});

export const logOut = () => (dispatch) => {
  dispatch(islogin(false));
  dispatch(istoken(""));
  // dispatch(userName(""));
  localStorage.removeItem("token");
  localStorage.removeItem("isLogin");
};

export const loginUser = (payload) => (dispatch) => {
  // const form = payload;
  const token = "12msndjhurytfghsbdhfgsaasdadasdadad";
  console.log(token);
  saveData("token", token);
  saveData("isLogin", true);
  dispatch(istoken(token));
  dispatch(islogin(true));
};
