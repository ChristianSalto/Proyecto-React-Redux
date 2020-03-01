import React, { Component, Fragment } from 'react';
import { getAllAds } from '../../services/api';
import { Card } from '../listAds/Cards';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [{}],
        }
    }

    componentWillMount = async () => {
        const idCards = this.props.location.props;
        const { data } = await getAllAds();
        const { results } = data;
        results.map((item) => {
            if (item._id === idCards) {
                this.setState({ result: item });
            }
        })
    }

    render() {
        if (this.state.result._id === this.props.location.props) {
            return (
                <Fragment>
                    <div>
                        <h1>You are welcome</h1>
                        <Card data={this.state.result} />
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
export default Details;