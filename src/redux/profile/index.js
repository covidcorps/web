import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadUserProfile, loadUserAssignments, changeAssignmentStatus } from './duck';

import {
  Container, Row, Col
} from 'react-bootstrap';
// import Profile from '../../views/Profile';

class Profile extends React.Component {
  componentDidMount() {
    const { actions: { loadUserProfile, loadUserAssignments, changeAssignmentStatus}} = this.props;
    loadUserProfile(1);
    loadUserAssignments(1);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>This is your profile</Col>
          <Col>These are your assignments</Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return state.profile;
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadUserProfile: (userId) => dispatch(loadUserProfile(userId)),
      loadUserAssignments: (userId) => dispatch(loadUserAssignments(userId)),
      changeAssignmentStatus: (id, accepted) => dispatch(changeAssignmentStatus(id, accepted))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))