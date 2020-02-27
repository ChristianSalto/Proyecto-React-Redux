import React, { Component, Fragment } from 'react';
import { getAds } from '../../services/api';
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
        const { data } = await getAds();
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
                </Fragment>
            )
        } else {
            return (<h1></h1>);
        }
    }
}
export default Details;