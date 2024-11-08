import apiCallsInProgress from "./apiStatusReducer";
import authors from "./authorReducer";
import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
