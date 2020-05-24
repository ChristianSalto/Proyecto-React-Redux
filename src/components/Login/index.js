import { connect } from 'react-redux';

import Login from './Login';

import { getStateUser } from '../../store/selectors';
import { userSession, fetchSuccess } from '../../store/action';

function mapStateToProps(state, ownProps) {
    return {
        user: getStateUser(state),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        userSession: (user) => dispatch(userSession(user)),
        fetchSuccess: (data) => dispatch(fetchSuccess(data)),
    }
}

// export const mapStateToProps = {
//     mapStateToProps
// }

const connected = connect(mapStateToProps, mapDispatchToProps);
const UserLogined = connected(Login);



export default UserLogined;