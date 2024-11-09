import React, { useEffect } from "react";
import { deleteCourse, loadCourses } from "../../redux/actions/courseActions";
import { useDispatch, useSelector } from "react-redux";

import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import { loadAuthors } from "../../redux/actions/authorActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CoursesPage() {
  const navigate = useNavigate();
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

  const handleDeleteCourse = async course => {
    toast.success("Course deleted");
    try {
      await dispatch(deleteCourse(course));
    } catch (error) {
      toast.error("Delete failed. " + error.message, {
        autoClose: false
      });
    }
  };

  return (
    <>
      <h2>Courses</h2>
      <button className="btn btn-primary" onClick={() => navigate("/course")}>
        Add Course
      </button>
      {loading ? (
        <Spinner />
      ) : (
        <CourseList
          onDeleteClick={handleDeleteCourse}
          courses={coursesWithAuthors}
        />
      )}
    </>
  );
}
