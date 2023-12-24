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
  function handleTitleChange(event) {
    const updatedCourse = { ...course, title: event.target.value }; //1.copy course object and 2. set Title
    //updatedCourse.title = event.target.value;
    setCourse(updatedCourse);
  }
  return (
    <>
      <Prompt when={true} message="Are you sure want to leave course block ?" />
      <h2>ManageCourse</h2>
      <CourseForm course={course} onTitleChange={handleTitleChange} />
      {/* <h5>Course Title is {props.match.params.slug}</h5>*/}
    </>
  );
};
export default ManageCoursePage;
