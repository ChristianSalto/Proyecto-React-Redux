import { connect } from 'react-redux';

import SeeAllAds from './SeeAllAds';
import { handleAllAds } from '../../store/action';


function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchAllAds: () => dispatch(handleAllAds()),
  };
}

const connected = connect(null, mapDispatchToProps);
const SeeAllAdsConnected = connected(SeeAllAds);

export default SeeAllAdsConnected;
