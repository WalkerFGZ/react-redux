import * as courseApi from "../../api/courseApi";
import * as types from "./actionTypes";

export function createCourse(course) {
  //action creator
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
