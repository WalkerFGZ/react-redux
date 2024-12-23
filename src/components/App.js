import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import ManageCoursePage from "./courses/ManageCoursePage";
import PageNotFound from "./PageNotFound";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course/:slug?" element={<ManageCoursePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar theme="colored" />
    </div>
  );
}
