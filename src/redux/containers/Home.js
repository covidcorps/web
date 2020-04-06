import Home from '../../views/Home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  isSignedIn: state.isSignedIn
});

export default withRouter(connect(mapStateToProps)(Home));