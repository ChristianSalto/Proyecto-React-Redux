import { connect } from 'react-redux';

import ListAds from './ListAds';
import { getAdvert, filterAdvert, loadSession, handleSearch } from '../../store/action';
import { getStateAds, getStateUser, getLimit } from '../../store/selectors';


function mapStateToProps(state, ownProps) {
    return {
        getStateAds: getStateAds(state),
        getStateUser: getStateUser(state),
        getLimit: getLimit(),
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchAds: (getLimit) => getAdvert(dispatch, getLimit),
        filterAdvert: (field, limit) => filterAdvert(dispatch, field, limit),
        loadSession: () => loadSession(dispatch),
        handleSearch: (name, limit) => handleSearch(dispatch, name, limit),
    }
}



const connected = connect(mapStateToProps, mapDispatchToProps);
const ListAdsConnected = connected(ListAds);



export default ListAdsConnected;