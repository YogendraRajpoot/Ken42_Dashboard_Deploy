import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../../Redux/auth/actionAuth";
import { loadData } from "../../Utils/localStorage";


const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(242, 112, 156),
    rgb(255, 148, 114)
  );
  color: white;
  padding: 20px;
  height: 920px;
  width: 100%;
  h1 {
    color: black;
  }
`;

export const StyledForm = styled.form`
  border: 1px solid black;
  border-radius: 2%;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px 8px 10px #888888;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: large;
  font-weight: 1000;
  &:hover {
    color: black;
  }
`;

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // *********token check in localstorage*****************//

  useEffect(() => {
    if (loadData("isLogin") === true) {
      console.log("59",loadData("isLogin"));
      navigate(`/`);
    }
  }, [navigate]);
  // ****************************************************** //

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(loginUser(form));
    setTimeout(() => {
      if (loadData("isLogin") === true) {
        console.log("74-succes");
        navigate(`/`);
      }
    }, 1000);
  };

  const { username, password } = form;

  // const isLogin = useSelector((state) => state.auth.isLogin);
  if (loadData("code%%4") === true) {
    console.log("84-succes");
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <h1>Login</h1>
      <br />
      <br />
      <StyledForm onSubmit={handleSubmit}>
        <br />
        <br />
        <label>
          Username :-
          <input
            type="text"
            placeholder="Type Admin"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Password :-
          <input
            type="password"
            placeholder="Type Admin"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Login" />
        <br />
        <br />
        <StyledLink to={"/register"}>or Sign up</StyledLink>
        <br />
        <br />
      </StyledForm>
    </Container>
  );
};
