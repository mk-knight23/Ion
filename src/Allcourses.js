import React, { useState } from 'react'
import Course from './Course'

const Allcourses = () => {
    const [courses, setCourses] = useState([
        { title: "Dango COurse", info: "This is a Dango Course" },
        { title: "Java COurse", info: "This is a Java Course" },
        { title: "Python COurse", info: "This is Python Course" },
        { title: "ANgular COurse", info: "This is Angular Course" },
        { title: "c/c++ COurse", info: "This is a c/c++ Course" }
    ])
    return (
        <div>
            <h1>ALl courses</h1>
            <p>List Of courses</p>

            {
                courses.length > 0
                    ? courses.map((item) => <Course Course={item} />)
                    : "No Courses"
            }
        </div>
    )
}

export default Allcourses
