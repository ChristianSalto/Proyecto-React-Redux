import { connect } from 'react-redux';

import ListAds from './ListAds';
import { fetchAds } from '../../store/action';

function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchAds: () => fetchAds(dispatch),
    }
}

const connected = connect(null, mapDispatchToProps);
const ListAdsConnected = connected(ListAds);



export default ListAdsConnected;