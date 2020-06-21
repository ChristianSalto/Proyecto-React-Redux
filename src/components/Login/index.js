import { connect } from 'react-redux';

import Login from './Login';

import { getStateUser } from '../../store/selectors';
import { loadLogin } from '../../store/action';

function mapStateToProps(state, ownProps) {
  return {
    user: getStateUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadLogin: (username, password) =>
      dispatch(loadLogin(username, password, ownProps)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const UserLogined = connected(Login);

export default UserLogined;
