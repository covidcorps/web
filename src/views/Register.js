import React from 'react';

import {
  Container, Row, Col,
  Form,
  Button
} from 'react-bootstrap';

import './Register.css'

import RepeatedFormControl from './repeat/Repeat';

/**
 * Define the PhoneContactInfo Sub-component.
 * This allows us to pass a single component into the Repeater with a clearly defined set of required props
 * @param {*} param0 
 */
const PhoneContactInfo = ({value, placeholder, handleUpdate}) => (
  <div className="input-group">
    <div className="input-group-prepend">
      <Form.Control as="select" value={value.type} onChange={ev => handleUpdate("type", ev.target.value)}>
        <option>Mobile</option>
        <option>Work</option>
        <option>Home</option>
      </Form.Control>
    </div>
    <Form.Control value={value.number} placeholder={placeholder} onChange={ev => handleUpdate("number", ev.target.value)} />
  </div>
);


export default ({ formState, handleUpdate, handleSizeChange }) => {
  return (
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
              <Form.Control as="select" onChange={ev => handleUpdate(ev.target.name, ev.target.value)}>
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
                  <Form.Control name="prefix" placeholder="Prefix" value={formState.prefix} onChange={(event) => handleUpdate(event.target.name, event.target.value)} />
                </Form.Group>
                <Col><Form.Control name="firstName" placeholder="First name" value={formState.firstName} onChange={(event => handleUpdate(event.target.name, event.target.value))} /></Col>
                <Col><Form.Control name="middleName" placeholder="Middle name" value={formState.middleName} onChange={(event => handleUpdate(event.target.name, event.target.value))} /></Col>
                <Col><Form.Control name="lastName" placeholder="Last name" value={formState.lastName} onChange={(event => handleUpdate(event.target.name, event.target.value))} /></Col>
                <Form.Group as={Col} md="1">
                  <Form.Control name="suffix" placeholder="Suffix" value={formState.suffix} onChange={(event => handleUpdate(event.target.name, event.target.value))} />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control name="address1" placeholder="Address" value={formState.address1} onChange={(event => handleUpdate(event.target.name, event.target.value))} />
                </Col>
              </Form.Row>
              <Form.Row className="mt-1">
                <Col>
                  <Form.Control name="address2" placeholder="Line 2" value={formState.address2} onChange={(event => handleUpdate(event.target.name, event.target.value))} />
                </Col>
              </Form.Row>
              <Row className="mt-4">
                <Col><Form.Control name="city" placeholder="City" value={formState.city} onChange={(event => handleUpdate(event.target.name, event.target.value))} /></Col>
                <Col><Form.Control name="state" placeholder="State" value={formState.state} onChange={(event => handleUpdate(event.target.name, event.target.value))} /></Col>
                <Col><Form.Control name="zipcode" placeholder="Zip" md="3" value={formState.zipcode} onChange={(event => handleUpdate(event.target.name, event.target.value))} /></Col>
              </Row>
              <Row className="mt-4">
                <Form.Group as={Col}>
                  <Form.Control name="email" placeholder="Email Address" value={formState.email} onChange={event=> handleUpdate(event.target.name, event.target.value)} />
                </Form.Group>
              </Row>
              <Row className="mt-4">
                <Form.Group controlId="phones" as={Col}>
                  <Container>
                    <Row>
                      <Col>
                        <Form.Label>Phone Numbers</Form.Label>
                      </Col>
                      <Col>
                        <div className="btn-group float-right mb-1 mr-1" role="group">
                          <Button 
                            className="btn-sm btn-secondary" 
                            onClick={() => handleSizeChange("phones", 1)}
                          > + </Button>
                          <Button 
                            className="btn-sm btn-secondary" 
                            disabled={formState.phones.length <= 0}
                            onClick={() => handleSizeChange("phones", -1)} 
                          > - </Button>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <RepeatedFormControl 
                          as={PhoneContactInfo} 
                          fieldGroupName="phones"
                          values={formState.phones} 
                          placeholder="###-###-####"
                          handleUpdate={handleUpdate}
                         />
                      </Col>
                    </Row>
                  </Container>
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
}