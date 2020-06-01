/* eslint-disable */

import React, { Component, Fragment } from 'react';
import { Card } from '../Cards/Cards';
import { Link } from 'react-router-dom';
import hocDetailsAds from '../../Hoc/fetchDetailsAds';

class Details extends Component {

    render() {
        const { data: ads, id } = this.props;
        if (!ads) return <div><h3>Loading...</h3></div>
        if (ads._id === id) {
            return (
                <Fragment>
                    <div>
                        <h1>You are welcome</h1>
                        <Card data={ads} />
                    </div>

                    <Link to="/listAds">
                        <h4>Home</h4>
                    </Link>
                    <Link to="/seeAllAds">
                        <h4>Go to see all ads</h4>
                    </Link>
                </Fragment>
            )
        } else {
            return (<Fragment></Fragment>);
        }
    }
}

export default hocDetailsAds()(Details);