import React from 'react';

import {
  Container, Row, Col,
  Form,
  Button
} from 'react-bootstrap';

import './Register.css'


export default () => (
  <Container className="infinite-paper">
    <Row>
      <Col>
        <h3>Register for CovidCorps</h3>
      </Col>
    </Row>
    <Row className="mt-3">
      <Container>
      <Form>
        <Row>
          <Col>
            <Form.Control as="select">
              <option>Occupation</option>
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Paramedic</option>
              <option>Respiratory Tech</option>
              <option>EMT</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Row className="mt-4">
              <Form.Group as={Col} md="1">
                <Form.Control placeholder="Prefix" />
              </Form.Group>
              <Col><Form.Control placeholder="First name" /></Col>
              <Col><Form.Control placeholder="Middle name" /></Col>
              <Col><Form.Control placeholder="Last name" /></Col>
              <Form.Group as={Col} md="1">
                <Form.Control placeholder="Suffix" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Address" />
              </Col>
            </Form.Row>
            <Form.Row className="mt-1">
              <Col>
                <Form.Control placeholder="Line 2" />
              </Col>
            </Form.Row>
            <Row className="mt-4">
              <Col><Form.Control placeholder="City" /></Col>
              <Col><Form.Control placeholder="State" /></Col>
              <Col><Form.Control placeholder="Zip" md="3" /></Col>
            </Row>
            <Row className="mt-4">
              <Form.Group as={Col} md="3">
                <Form.Control placeholder="Phone" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control placeholder="Email" />
              </Form.Group>
            </Row>
            <Row className="mt-2">
              <Col><Button type="submit" onClick={() => {}}>Register</Button></Col>
            </Row>
          </Col>
        </Row>
        </Form>
      </Container>
    </Row>
  </Container>
);