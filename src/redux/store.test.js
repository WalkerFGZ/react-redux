import * as courseActions from "./actions/courseActions";

import { createStore } from "redux";
import initialState from "./reducers/initialState";
import rootReducer from "./reducers";

it("Should handle creating courses", function () {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code"
  };

  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
