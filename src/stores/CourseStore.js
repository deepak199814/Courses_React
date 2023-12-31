//our store needs to emit an event each time  a change occurs

/*
https://nodejs.org/api/events.html
3 function in each flux store
 1.addChangeListener(wraps on)
 2.removeChangeListener(wraps removeListener) 
 3.emitChange(wraps emit)
*/
import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

let _courses = [];
const CHANGE_EVENT = "change";

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  //Handy functions return data from flux stores
  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug); //predicate function or function that return true/false
  }
}

const store = new CourseStore();
Dispatcher.register((action) => {
  switch (action.Type) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange(); ///emitting change
      break;

    default:
      //nothing to do
      break;
  }
});

export default store;
