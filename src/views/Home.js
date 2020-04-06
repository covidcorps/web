import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Dropdown } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';


export default ({ isSignedIn }) => (
  <Switch>
    <Route path="/">
      <Row>
        <Col>
          <Jumbotron>
            <h1>Welcome to CovidCorps</h1>
            <p>
              CovidCorps seeks to take over where our government hasn't started. We're one country. Filled with amazing, talented, helpful people. But Covid-19 isn't equally severe everywhere right now. CovidCorps aims to find the people who want to help, and send them where they are needed. 
            </p>
            <p>
              <Link to="/register">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Route>
    <Route path="/register">
      
    </Route>
  </Switch>
);