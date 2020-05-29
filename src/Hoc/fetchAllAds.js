import React, { Component } from 'react';
import { getAllAds } from '../services/api';

export default function hocAllAds() {
    return function (WrappedComponent) {
        class FetchAllAds extends Component {
            constructor() {
                super();
                this.state = {
                    data: null,
                };
            }

            componentDidMount = async () => {
                const idCards = this.props.location.id;
                const { data } = await getAllAds();
                const { results } = data;
                results.map((item) => {
                    if (item._id === idCards) {
                        this.setState({ data: item });
                    }
                })
            }

            render() {
                return <WrappedComponent
                    data={this.state.data}
                    id={this.props.location.id}
                />
            }
        }

        return FetchAllAds;
    };
}