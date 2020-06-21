import { connect } from 'react-redux';

import Register from './Register';
import { loadRegister } from '../../store/action';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getRegister: (username, password) =>
      dispatch(loadRegister(username, password)),
    //loadSession: () => loadSession(dispatch),
  };
}

const connected = connect(null, mapDispatchToProps);
const RegisterConnected = connected(Register);

//console.log(RegisterConnected)

export default RegisterConnected;
