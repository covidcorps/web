import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateForm, changeContactCount } from './actions';
import Register from '../../views/Register';


const mapStateToProps = state => {
  return {
    formState: state.registrationForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSizeChange: (name, incr) => dispatch(changeContactCount(name, incr)),
    handleUpdate: (name, value) => dispatch(updateForm(name, value)) 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))