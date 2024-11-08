import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";

export default function CoursesPage() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);
  const authors = useSelector(state => state.authors);
  const loading = useSelector(state => state.apiCallsInProgress > 0);

  useEffect(() => {
    if (courses.length > 0) return;
    dispatch(loadCourses()).catch(error => {
      alert("Loading courses failed" + error);
    });

    dispatch(loadAuthors()).catch(error => {
      alert("Loading authors failed" + error);
    });
  }, []);

  const coursesWithAuthors =
    authors.length === 0
      ? []
      : courses.map(course => {
          return {
            ...course,
            authorName: authors.find(a => a.id === course.authorId).name || ""
          };
        });

  return (
    <>
      <h2>Courses</h2>
      {loading ? <Spinner /> : <CourseList courses={coursesWithAuthors} />}
    </>
  );
}
