import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'reactstrap';

const btnhandle = () => {
    toast("hello world")
}
function Footer() {
    return (
        <div>
            <ToastContainer />
            <h1>this is Footer</h1>
            <Button onClick={btnhandle} outline color="danger">danger</Button>
        </div>
    )
}

export default Footer
