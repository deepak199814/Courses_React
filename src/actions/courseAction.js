import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    //hey Dispatcher, go and tell to all the stores course was created.[for understanding]
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE, //to avoid typo added all constant value in actionTypes.js file and get it from there
      course: savedCourse,
    });
  });
}
