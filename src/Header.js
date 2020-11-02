import React from 'react'
import { Card, CardBody } from 'reactstrap'

function Header() {
    return (
        <div>
        <Card className="my-3 bg-warning" >
            <CardBody className="my-3">
            <h1 className="text-center my-3">Welcome To Courses APP </h1>
            </CardBody>
        </Card>
        </div>
    )
}

export default Header
