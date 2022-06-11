import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { registerBox } from "../../Redux/Student/actionStudent";
import { loadData } from "../../Utils/localStorage";
import { Registeration } from "../Registeration/Registeration";

const StyledTable = styled.table`
  // background: white;
  color: white;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    /* display: grid; */
    /* grid-auto-rows: 1fr 1fr; */
    // border: 2px solid green;
    /* margin-left: 5%; */
    /* margin-top: 0%; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
  }
`;

export const EventList = () => {
  const dispatch = useDispatch();
  const registerbox = useSelector((state) => state.student.registerbox);
  const [data, setData] = useState([]);
  const [studentCount, setStudentcount] = useState("");

  useEffect(() => {
    return () => {
      getdata();
    };
  }, []);
  const getdata = () => {
    fetch("./event.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.event.filter((d) => d.status === "upcoming"));
        setStudentcount(res.event.length);
      })
      .catch((err) => console.log(err));
  };
  function handlefilter(param) {
    console.log("51");
    fetch("./event.json")
      .then((res) => res.json())
      .then((res) => setData(res.event.filter((d) => d.status === param)))
      .catch((err) => console.log(err));
  }

  console.log("187", data);

  if (loadData("isLogin") === false || loadData("isLogin") === null) {
    return <Navigate to="/login" />;
  }
  return (
    <div
      style={{
        height: "85vh",
        background: "black",
        marginTop: "15vh",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: "8%",
          height: "7%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "99%",
            background: "black",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              background: "black",
              color: "white",
              alignItems: "center",
            }}
          >
            <h4 style={{ marginLeft: "2%", color: "green" }}>{studentCount}</h4>
            <span style={{ marginLeft: "2%" }}> Filter By:- </span>
            <Button
              style={{ marginLeft: "2%" }}
              variant="outline-success"
              onClick={() => handlefilter("complete")}
            >
              Up-Coming Events
            </Button>
            <Button
              style={{ marginLeft: "2%" }}
              variant="outline-success"
              onClick={() => handlefilter("ongoing")}
            >
              On-Going Events
            </Button>
            <Button
              style={{ marginLeft: "2%" }}
              variant="outline-success"
              onClick={() => handlefilter("upcoming")}
            >
              Complete Events
            </Button>
          </div>
        </div>
      </div>
      <div>{registerbox && <Registeration />}</div>
      <div>
        <StyledTable className="table">
          <thead style={{ position: "sticky", top: "0%" }}>
            <tr>
              <th style={{ background: "black" }}>S.No</th>
              <th style={{ background: "black" }}>Event Name</th>
              <th style={{ background: "black" }}>Start At</th>
              <th style={{ background: "black" }}>End At</th>
              <th style={{ background: "black" }}>Event's Status</th>
              <th style={{ background: "black" }}>Know More</th>
              <th style={{ background: "black" }}>Registration</th>
            </tr>
          </thead>
          <tbody style={{}}>
            {data.map((d) => {
              return (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>Event{d.name}</td>
                  <td>{d.start_date}</td>
                  <td>{d.end_date}</td>
                  <td
                    style={{
                      background:
                        d.status === "complete"
                          ? "red"
                          : d.status === "ongoing"
                          ? "green"
                          : "yellow",
                      color: d.status === "upcoming" ? "black" : "white",
                    }}
                  >
                    {d.status}
                  </td>
                  <td>
                    <a href={d.url}>Know More</a>
                  </td>
                  <td>
                    <>
                      <Button
                        style={{ marginLeft: "2%" }}
                        variant="outline-success"
                        onClick={() => dispatch(registerBox(true))}
                      >
                        Registration
                      </Button>
                    </>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
        <CardContainer>
          {data
            // .filter((d) => {
            //   if (search === "") {
            //     return d;
            //   } else if (
            //     d.name.toLowerCase().includes(search.toLowerCase()) ||
            //     d.name.toLowerCase().includes(search.toLowerCase()) ||
            //     d.phone.includes(search)
            //   ) {
            //     return d;
            //   }
            // })
            .map((d) => {
              return (
                <Card
                  // border="success"
                  style={{
                    width: "20rem",
                    marginTop: "5%",
                    marginLeft: "2%",
                    // background:
                    //   d.status === "complete"
                    //     ? "red"
                    //     : d.status === "ongoing"
                    //     ? "green"
                    //     : "yellow",
                    // boxShadow: "10px 10px 5px 12px green",
                    boxShadow:
                      d.status === "complete"
                        ? "4px 11px 30px 7px red"
                        : d.status === "ongoing"
                        ? "4px 11px 30px 7px green"
                        : "4px 11px 30px 7px yellow",
                    // border:"10px solid green",
                    // backgroundImage: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))",
                    // backgroundImage: "linear-gradient(25deg,#d64c7f,#ee4758 50%)",
                    // backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)",
                    // backgroundImage: "linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )",
                  }}
                >
                  <Card.Header>Event Name :- {d._id}</Card.Header>
                  <Card.Body>
                    <Card.Text>S.No :- {d.id}</Card.Text>
                    <Card.Text>Start At :- {d.start_date}</Card.Text>
                    <Card.Text>End At :-{d.end_date} Term</Card.Text>
                    <Card.Text
                      style={{
                        background:
                          d.status === "complete"
                            ? "red"
                            : d.status === "ongoing"
                            ? "green"
                            : "yellow",
                        color: d.status === "upcoming" ? "black" : "white",
                      }}
                    >
                      Status :-{d.status} Term
                    </Card.Text>
                    <Card.Text>
                      <a href={d.url}>Know More</a>
                    </Card.Text>
                    <Card.Text>
                      <Button
                        style={{ marginLeft: "2%" }}
                        variant="outline-success"
                        onClick={() => dispatch(registerBox(true))}
                      >
                        Registration
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </CardContainer>
      </div>
    </div>
  );
};
