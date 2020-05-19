/* eslint-disable */

import React, { Component } from 'react';
import { getAllAds, filterAdsAdvanced } from '../../services/api';
import Cards from '../listAds/Cards';
import { Link } from 'react-router-dom';
import { DivContainerAllAds, DivHome, DivRanger } from '../seeAllAds/styledSeeAllAds';
// import { Nav, InputNav, Search } from '../listAds/StyleListAds';


class SeeAllAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [{}],
            price: "500"
        }
    }

    componentWillMount = async () => {
        const { data } = await getAllAds();
        const { results } = data;
        this.setState({ result: results });
    }

    // handleChangePrice = (event) => {
    //     const { value } = event.target;
    //     value.toString();
    //     this.setState({ price: value });
    // }

    // handleFilter = async () => {
    //     const { name } = this.state;
    //     const { data } = await filterAdsAdvanced({ name: name, price: `1-${this.state.price}` });
    //     const { results } = data;
    //     this.setState({ result: results });
    // }

    // updateInputValue = event => {
    //     this.setState({
    //         name: event.target.value
    //     });
    // }

    // handleKeyUp = (event) => {
    //     if (event.keyCode === 13) this.handleFilter();
    // }


    render() {
        return (
            <DivContainerAllAds>
                <DivHome>
                        <Link to="/listAds">
                            <h4>Home</h4>
                        </Link>
                    {/* <Nav>
                        <div>
                            <DivRanger> <input type="range" min="0" max="10000" name="price" onChange={this.handleChangePrice} /></DivRanger>
                            <span>{this.state.price} $</span>
                        </div>
                        <InputNav type="text" onChange={this.updateInputValue} onKeyUp={this.handleKeyUp} required />
                        <Search onClick={this.handleFilter}> Search </Search>
                    </Nav> */}
                </DivHome>
                <Cards data={this.state.result} />
            </DivContainerAllAds>
        )
    }
}


export default SeeAllAds;