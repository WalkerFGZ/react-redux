import React, { useEffect, useState } from "react";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import CourseForm from "./CourseForm";
import Spinner from "../common/Spinner";
import { loadAuthors } from "../../redux/actions/authorActions";
import { newCourse } from "../../../tools/mockData";
import { toast } from "react-toastify";

export default function ManageCoursePage() {
  const dispatch = useDispatch();

  const authors = useSelector(state => state.authors);
  const courses = useSelector(state => state.courses);

  const [course, setCourse] = useState({ newCourse });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadCourses()).catch(error => {
        alert("Loading courses failed" + error);
      });
    } else if (slug) {
      setCourse(courses.find(course => course.slug === slug) || newCourse);
    }
  }, [courses, slug]);

  useEffect(() => {
    if (authors.length > 0) return;
    dispatch(loadAuthors()).catch(error => {
      alert("Loading authors failed" + error);
    });
  }, [authors]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    dispatch(saveCourse(course))
      .then(() => {
        toast.success("Course saved.");
        navigate("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      authors={authors}
      course={course}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
      errors={errors}
    />
  );
}
