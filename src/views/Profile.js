import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';

function Profile({ handleAssignmentStatusChange, assignments, userInfo }) {
  return (
    <Container>
      <Row>
        <Col>This is your profile</Col>
        <Col>These are your assignments</Col>
      </Row>
    </Container>
  );
}

export default Profile;