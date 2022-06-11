import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GrClose } from "react-icons/gr";
import { registerBox } from "../../Redux/Student/actionStudent";

const PopUpModal = styled.div`
  // border: 2px solid black;
  box-shadow: 0px 10px 29px rgba(0, 0, 0, 0.35);
  background: white;
  position: relative;
  margin-top: 20vh;
  padding: 93px 50px;
  width: 60vh;
  // overflow: scroll;
  border-radius: 13%;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  // border: 2px solid black;
  .buttonDiv {
    position: static;
    z-index: 1;
    /* width: 5vh; */
    /* height: 4vh; */
    /* border: 2px solid; */
    margin-top: -51vh;
    margin-left: 52vh;
  }

  @media only screen and (max-width: 800px) {
    // border:2px solid black;
    background: white;
    position: relative;
    height: 100%;
    margin-top: 0vh;
    padding: 0px;
    width: 100%;
    border-radius: 0%;
    .buttonDiv {
      position: fixed;
      top: 2vh;
      background: white;
      right: 6%;
      z-index: 1;
      // width: 47%,
      // height: 8%,
    }
  }
`;
const Wrapper = styled.div`
  // border: 2px solid;
  // border: 2px solid black;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(200, 200, 200);
  top: 0;
  left: 0;
  z-index: 60;
`;
const ButtonWrapper = styled.div`
  // border: 2px solid;
  // margin-top: 2vh;
  position: fixed;
  width: 50%;
  height: 60vh;
  // width: 100%;
  // height: 100%;
  // border: 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0%;
  @media only screen and (max-width: 800px) {
    margin-top: 2vh;
    position: fixed;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
  }
  button {
    padding: 3% 5%;
  }
  input {
    padding: 3% 5%;
  }
`;
const Card = styled.div`
  // border: 2px solid;
  cursor: pointer;
  margin-top: 0%;
  overflow: scroll;
  /* padding: 2% 2%; */
  width: 100%;
  height: 100%;
  // border: 2px solid;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  .header {
    font-weight: 1000;
    fontsize: larger;
    padding: 1vh 0vh;
    position: fixed;
    top: 22vh;
    border-bottom: 1px solid grey;
    width: 54.5vh;
  }
  @media only screen and (max-width: 800px) {
    cursor: pointer;
    margin-top: 11vh;
    overflow: scroll;
    width: 90%;
    height: 86%;
    // border: 2px solid;
    /* text-align: left; */
    margin-left: auto;
    margin-right: auto;
    font-size: 124%;

    .header {
      top: 6vh;
      width: 90%;
    }
  }
`;
const StyledForm = styled.form`
  // border: 2px solid;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Registeration = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    eventname: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { name, email, eventName, mobile } = form;

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({});
    // fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
    //   method: "post",
    //   body: JSON.stringify(form),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  //   const d = useSelector ((state) => state.card);

  function onClickClose() {
    dispatch(registerBox(false));
  }
  return (
    <Wrapper>
      <PopUpModal>
        <div className="buttonDiv">
          <button
            style={{
              cursor: "pointer",
              // marginTop: "2%",
              // float: "right",
              padding: "4%",
              border: "0",
              background: "white",
              color: "grey",
            }}
            onClick={onClickClose}
          >
            <GrClose />
          </button>
        </div>
        <ButtonWrapper>
          <div style={{ height: "96%", width: "100%" }}>
            <Card>
              <StyledForm onSubmit={hadleSubmit}>
                <br />
                <br />
                <label>
                  {" "}
                  Name :-
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <br />
                <label>
                  Email :-
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <br />
                <label>
                  Number :-
                  <input
                    type="number"
                    placeholder="Enter Your Mobile-Number"
                    name="mobile"
                    value={mobile}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <br />
                <label>
                  In Which Event You Want To Participate :-
                  <input
                    type="text"
                    placeholder="In Which Event You Want To Participate"
                    name="eventName"
                    value={eventName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <br />
              </StyledForm>
            </Card>
          </div>
        </ButtonWrapper>
      </PopUpModal>
    </Wrapper>
  );
};
