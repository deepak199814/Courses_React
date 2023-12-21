import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  return (
    <>
      <Prompt when={true} message="Are you sure want to leave course block ?" />
      <h2>ManageCourse</h2>
      <h5>Course Title is {props.match.params.slug}</h5>
    </>
  );
};
export default ManageCoursePage;
