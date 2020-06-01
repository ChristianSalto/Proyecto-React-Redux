//export { default } from './SeeAllAds';

import { connect } from 'react-redux';

import SeeAllAds from './SeeAllAds';
import { handleAllAds } from '../../store/action';
//import { getStateAds } from '../../store/selectors';

// const mapStateToProps = (state, ownProps) => {
//     return {
//         getStateAds: getStateAds(state),
//     }
// }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchAllAds: () => dispatch(handleAllAds()),
  };
}

const connected = connect(null, mapDispatchToProps);
const SeeAllAdsConnected = connected(SeeAllAds);

export default SeeAllAdsConnected;
