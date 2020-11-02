import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Course( {Course}) {
    return (
        <div>
            <Card>
                <CardBody>
    <CardTitle>{Course.title}</CardTitle>
    <CardText>{Course.info}</CardText>
                    <Button outline color="danger">Delete</Button>
                    <Button outline color="warning ml-3">Update</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course
