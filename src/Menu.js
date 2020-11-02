import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Menu() {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action >
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Addcourse" action >
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Allcourses" action >
                View Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/example" action >
                ABout Us
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Contact" action >
                Contact
            </Link>
        </ListGroup>
    )
}

export default Menu
