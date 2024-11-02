import { NavLink } from "react-router-dom"
import React from "react"

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {" | "}
            <NavLink to="/courses">Courses</NavLink>
            {" | "}
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Header