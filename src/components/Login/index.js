import { connect } from 'react-redux';

import Login from './Login';

import { getStateUser } from '../../store/selectors';
import { loadLogin, loadSession } from '../../store/action';

function mapStateToProps(state, ownProps) {
    return {
        user: getStateUser(state),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return { 
        loadLogin: (username, password) => loadLogin(dispatch, username, password, ownProps),
        loadSession: () => loadSession(dispatch),
    }
}

// export const mapStateToProps = {
//     mapStateToProps
// }

const connected = connect(mapStateToProps, mapDispatchToProps);
const UserLogined = connected(Login);



export default UserLogined;