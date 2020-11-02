import React from 'react';

import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import Example from './example';
import Allcourses from './Allcourses'
import Addcourse from './Addcourse';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Menu from './Menu';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Contact';

function App() {
  return (
    <div >
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>

              <Route path="/" component={Home} exact />
              <Route path="/Addcourse" component={Addcourse} exact />
              <Route path="/Allcourses" component={Allcourses} exact />
              <Route path="/example" component={Example} exact />
              <Route path="/Contact" component={Contact} exact />


            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
