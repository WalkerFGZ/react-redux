import { Route, Routes } from "react-router-dom"

import AboutPage from "./about/AboutPage"
import CoursesPage from "./courses/CoursesPage"
import Header from "./common/Header"
import HomePage from "./home/HomePage"
import PageNotFound from "./PageNotFound"
import React from "react"

export default function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </div>
    )
}



