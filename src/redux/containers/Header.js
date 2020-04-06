import Header from '../../views/Header';
import { connect } from 'react-redux';
import { toggleLogin } from '../auth';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => dispatch(toggleLogin())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

