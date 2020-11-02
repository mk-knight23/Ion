import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Addcourse = () => {
    return (
        <div>
            <h1>Fill COurses here</h1>
            <Form>
                <FormGroup>
                    <Label >Course ID</Label>
                    <Input type="text" name="userid" id="userid" placeholder="Enter here" />
                </FormGroup>
                <FormGroup>
                    <Label >Course Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Enter here" />
                </FormGroup>
                <FormGroup>
                    <Label >Course Info</Label>
                    <Input type="textarea" name="info" id="info" placeholder="Enter here" style={{ height: 150 }} />
                </FormGroup>
                <Button color="primary" size="lg">Add Course</Button>{' '}
                <Button color="warning ml-2" size="lg">CLear</Button>{' '}
            </Form>
        </div>
    )
}

export default Addcourse
