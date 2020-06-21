import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getStateUser } from '../store/selectors';

import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    user: getStateUser(state),
  };
}


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { registered } = rest.user;

  return (
    <Route
      {...rest}
      render={(props) =>
        registered ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
