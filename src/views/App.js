import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { store } from '../redux/index';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col} from 'react-bootstrap';

import Header from '../redux/containers/Header';
import Home from '../redux/containers/Home';
import Register from '../redux/registration/container';
import Profile from '../redux/profile';

import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link,
  Redirect
} from 'react-router-dom';


function App() {
  return (
    <div className="top-level">
    <Router>
      <Provider store={store}>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row className="top-level">
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Provider>
    </Router>
    </div>
  );
}

export default App;
