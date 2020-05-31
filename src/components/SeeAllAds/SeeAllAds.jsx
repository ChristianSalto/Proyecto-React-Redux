/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { getAllAds } from '../../services/api';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { DivContainerAllAds, DivHome, DivRanger } from './styledSeeAllAds';
import T from 'prop-types';
// import { Nav, InputNav, Search } from '../listAds/StyleListAds';

function SeeAllAds({ fetchAllAds }) {
  const [ads, setAds] = useState(null);

  // const state = () => getState;
  // console.log(state);
  // const { ads } = props.getAds;
  // const [ads, setAds] = useState(ads);
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         result: [{}],
  //         price: "500"
  //     }
  // }

  useEffect(() => {
    const getAds = async () => {
      fetchAllAds();
      // getStateAds;
      const { data } = await getAllAds();
      const { results } = data;
      setAds(results);
    };

    getAds();
  }, []);

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

  // render() {
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
      {ads === null ? <h3>Loading...</h3> : <Cards ads={ads} />}
    </DivContainerAllAds>
  );
}
// }

SeeAllAds.propTypes = {
  fetchAllAd: T.func,
};

export default SeeAllAds;
