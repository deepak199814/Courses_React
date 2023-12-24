import React, { useEffect, useState } from "react";
//import { Prompt } from "react-router-dom";
import { toast } from "react-toastify";

import CourseForm from "./CourseForm";
import * as courseapi from "../api/courseApi";

const ManageCoursePage = (props) => {
  const slug = props.match.params.slug; //from app.js /course/:slug
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    if (slug) {
      courseapi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [slug]); //added dependcy with props.match.params.slug;
  // function handleChange(event) {
  //   //1.copy course object[destructuring] and 2. set Name
  //   const updatedCourse = {
  //     ...course,
  //     [event.target.name]: event.target.value,
  //   };
  //   setCourse(updatedCourse);
  //After refactor below code-->
  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author Id is required";
    if (!course.category) _errors.category = "Categaory is required";

    setError(_errors);
    //Form is valid if errors object doesn't had any properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return null;
    courseapi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved sucessfully!");
    });
  }
  return (
    <>
      {/*
     <Prompt when={true} message="Are you sure want to leave course block ?" />*/}
      <h2>ManageCourse</h2>
      <CourseForm
        error={error}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <h5>Course Title is {props.match.params.slug}</h5>*/}
    </>
  );
};
export default ManageCoursePage;
