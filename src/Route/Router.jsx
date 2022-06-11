import React from "react";
import { Route, Routes } from "react-router-dom";
import { EventList } from "../Components/EventList/EventList";
import { Login } from "../Components/Login/Login";
import { StudentChart } from "../Components/StudentChart/StudentChart";
import { StudentList } from "../Components/StudentList/StudentList";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentList />} />
      {/* <Route path="studentlist" element={<StudentList />} /> */}
      <Route path="eventlist" element={<EventList />} />
      <Route path="studentchart" element={<StudentChart />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
