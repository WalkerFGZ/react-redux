import authors from "./authorReducer";
import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
