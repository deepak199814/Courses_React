import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  // function handleChange(event) {
  //   //1.copy course object[destructuring] and 2. set Name
  //   const updatedCourse = {
  //     ...course,
  //     [event.target.name]: event.target.value,
  //   };
  //   setCourse(updatedCourse);
  //After refactor below code-->
  function handleChange(target) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }
  return (
    <>
      <Prompt when={true} message="Are you sure want to leave course block ?" />
      <h2>ManageCourse</h2>
      <CourseForm course={course} onChange={handleChange} />
      {/* <h5>Course Title is {props.match.params.slug}</h5>*/}
    </>
  );
};
export default ManageCoursePage;
