import { connect } from 'react-redux';

import Register from './Register';


import { userSession, loadSession } from '../../store/action';



function mapDispatchToProps(dispatch, ownProps) {
    return {
        userSession: (user) => dispatch(userSession(user)),
        loadSession: () => loadSession(dispatch),
    }
}


const connected = connect(null, mapDispatchToProps);
const RegisterConnected = connected(Register);

//console.log(RegisterConnected)

export default RegisterConnected;