import React, { Component } from 'react';
import { getAds } from '../../services/api'
import Cards from '../listAds/Cards'


class ListAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            result: [{}]
        }
    }

    getAdvertisement = async () => {
        const { data } = await getAds();
        const { results } = data;
        console.log(results);
        this.setState({ result: results });
        console.log(this.state.result[0].name);

    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.getAdvertisement}>List ads</button>    
                <Cards data={this.state.result} />
            </div>

        )
    }
}


export default ListAds;