import { connect } from 'react-redux';

import CreateAds from './CreateAds';
import { createAds } from '../../store/action';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createAds: (ads) => dispatch(createAds(ads)),
  };
}

const connected = connect(null, mapDispatchToProps);
const CreateAdsConnect = connected(CreateAds);

export default CreateAdsConnect;
