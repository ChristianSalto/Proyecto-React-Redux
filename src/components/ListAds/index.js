import { connect } from 'react-redux';

import ListAds from './ListAds';
import {
  getAdvert,
  filterAdvert,
  handleSearch,
  userSession,
} from '../../store/action';
import { getStateAds, getStateUser, getLimit } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    getStateAds: getStateAds(state),
    getStateUser: getStateUser(state),
    getLimit: getLimit(),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchAds: (getLimit) => dispatch(getAdvert(getLimit)),
    filterAdvert: (field, limit) => dispatch(filterAdvert(field, limit)),
    cleanSession: (user, ads) => dispatch(userSession(user, ads)),
    handleSearch: (name, limit) => dispatch(handleSearch(name, limit)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const ListAdsConnected = connected(ListAds);

export default ListAdsConnected;
