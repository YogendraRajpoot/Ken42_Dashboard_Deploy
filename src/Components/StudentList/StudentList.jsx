import React, { useEffect, useState } from "react";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { loadData } from "../../Utils/localStorage";

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

export const StudentList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [studentCount, setStudentcount] = useState("");

  useEffect(() => {
    return () => {
      getdata();
    };
  }, []);
  const getdata = () => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.studentlist);
        setStudentcount(res.studentlist.length);
      })
      .catch((err) => console.log(err));
  };
  function handlefilter(param) {
    if (param === "term") {
      fetch("./db.json")
        .then((res) => res.json())
        .then((res) =>
          setData(
            res.studentlist.sort((a, b) => {
              return a.term - b.term;
            })
          )
        )
        .catch((err) => console.log(err));
    }
    if (param === "year") {
      fetch("./db.json")
        .then((res) => res.json())
        .then((res) =>
          setData(
            res.studentlist.sort((a, b) => {
              return a.year - b.year;
            })
          )
        )
        .catch((err) => console.log(err));
    }
  }

  function onChange(event) {
    setSearch(event.target.value);
  }
  // console.log("52", search);

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
              // marginLeft: "auto",
              // marginRight: "auto",
              color: "white",
              // border: "2px solid white",
              alignItems: "center",
            }}
          >
            <h4 style={{ marginLeft: "2%", color: "green" }}>{studentCount}</h4>
            <span style={{ marginLeft: "2%" }}> Filter By:- </span>
            <Button
              style={{ marginLeft: "2%" }}
              variant="outline-success"
              onClick={() => handlefilter("term")}
            >
              Term
            </Button>
            <Button
              style={{ marginLeft: "2%" }}
              variant="outline-success"
              onClick={() => handlefilter("year")}
            >
              Year
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              // flexDirection: "row",
              width: "50%",
              background: "black",
              // marginLeft: "auto",
              // marginRight: "auto",
              color: "white",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Form className="d-flex" style={{ marginRight: "4%" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                // id="inputText"
                onChange={onChange}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <StyledTable className="table">
          <thead style={{ position: "sticky", top: "0%" }}>
            <tr>
              <th style={{ background: "black" }}>S.No</th>
              <th style={{ background: "black" }}>Name</th>
              <th style={{ background: "black" }}>Roll Number</th>
              <th style={{ background: "black" }}>Term</th>
              <th style={{ background: "black" }}>Year</th>
              <th style={{ background: "black" }}>Phone</th>
            </tr>
          </thead>
          <tbody style={{}}>
            {data
              .filter((d) =>
                search === ""
                  ? d
                  : d.name.toLowerCase().includes(search.toLowerCase()) ||
                    d.name.toLowerCase().includes(search.toLowerCase()) ||
                    d.phone.includes(search)
              )
              .map((d) => {
                return (
                  <tr key={d._id}>
                    <td>{d.roll_number + 1}</td>
                    <td>{d.name}</td>
                    <td>1428497{d.roll_number}</td>
                    <td>{d.term}</td>
                    <td>{d.year} Year</td>
                    <td>{d.phone}</td>
                  </tr>
                );
              })}
          </tbody>
        </StyledTable>
        <CardContainer>
          {data
            .filter((d) =>
              search === ""
                ? d
                : d.name.toLowerCase().includes(search.toLowerCase()) ||
                  d.name.toLowerCase().includes(search.toLowerCase()) ||
                  d.phone.includes(search)
            )
            .map((d) => {
              return (
                <Card
                  border="success"
                  style={{
                    width: "20rem",
                    marginTop: "5%",
                    marginLeft: "2%",
                    background: "#f8f9fa",
                    // boxShadow: "10px 10px 5px 12px green",
                    boxShadow: "4px 11px 30px 7px green",
                    // border:"10px solid green",
                    // backgroundImage: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))",
                    // backgroundImage: "linear-gradient(25deg,#d64c7f,#ee4758 50%)",
                    // backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)",
                    // backgroundImage: "linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )",
                  }}
                >
                  <Card.Header>Id :- {d._id}</Card.Header>
                  <Card.Body>
                    <Card.Text>S.No :- {d.roll_number + 1}</Card.Text>
                    <Card.Title>Name :- {d.name} </Card.Title>
                    <Card.Text>Roll No. :- 1428497{d.roll_number}</Card.Text>
                    <Card.Text>Term :-{d.term} Term</Card.Text>
                    <Card.Text>Year :- {d.year} Year</Card.Text>
                    <Card.Text>Phone Number :- {d.phone}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </CardContainer>
      </div>
    </div>
  );
};
