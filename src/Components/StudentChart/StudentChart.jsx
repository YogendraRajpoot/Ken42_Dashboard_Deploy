import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { loadData } from "../../Utils/localStorage";

// import { PieChart, Pie } from "recharts";

const CardContainer = styled.div`
  // display: none;
  // @media screen and (max-width: 992px) {
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
  // }
`;

export const StudentChart = () => {
  const [data, setData] = useState([]);
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

  if (loadData("isLogin") === false || loadData("isLogin") === null) {
    return <Navigate to="/login" />;
  }
  // console.log("52", search);
  // const data01 = [
  //   { name: "Group A", value: 400 },
  //   { name: "Group B", value: 300 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
  //   { name: "Group E", value: 278 },
  //   { name: "Group F", value: 189 },
  // ];

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
          </div>
        </div>
      </div>
      <div>
        <CardContainer>
          {data.map((d) => {
            return (
              <div
                border="success"
                style={{
                  width: "20rem",
                  marginTop: "5%",
                  marginLeft: "2%",
                  background: "#f8f9fa",
                  boxShadow: "4px 11px 30px 7px green",
                }}
              >
                <br />
                <h6>Id :- {d._id}</h6>
                <br />
                <h4>Name :- {d.name}</h4>
                <div>
                  {/* <PieChart width={300} height={400}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data01}
                      cx={150}
                      cy={200}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                  </PieChart> */}
                </div>
              </div>
            );
          })}
        </CardContainer>
      </div>
    </div>
  );
};
