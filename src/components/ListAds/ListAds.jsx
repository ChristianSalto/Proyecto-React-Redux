/* eslint-disable */

import React, { Component } from 'react';
import T from 'prop-types';
import Cards from '../Cards/Cards';
import {
  Nav,
  InputNav,
  LogOut,
  Search,
  AsideRight,
  AsideContainer,
  DivContainerHome,
  TitleNav,
} from './StyleListAds';
import { Link } from 'react-router-dom';
import CompAsideLeft from '../CompAsideLeft';
//import Grid from '@material-ui/core/Grid';

class ListAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      priceMax: '0',
      priceMin: '0',
      limit: 6,
    };
  }

  componentDidMount() {
    const { fetchAds, getStateUser, loadSession, getLimit } = this.props;
    fetchAds(getLimit);
    getStateUser;
    if (getStateUser.length === 0) {
      loadSession();
    }
  }

  showFields = (event) => {
    const field = event.target.value;
    const { limit } = this.state;
    const filter = {
      fields: field,
    };
    const { filterAdvert } = this.props;
    filterAdvert(filter, limit);
  };

  handleFilter = () => {
    const { name, limit } = this.state;
    const { handleSearch } = this.props;
    handleSearch(name, limit);
  };

  updateInputValue = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeVenta = () => {
    this.setState({ isChecked: !this.state.isChecked });
    const { limit } = this.state;
    const filter = {
      venta: this.state.isChecked,
    };
    const { filterAdvert } = this.props;
    filterAdvert(filter, limit);
  };

  handleChangePrice = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    const { priceMax, priceMin, limit } = this.state;
    value.toString();
    name === 'priceMax'
      ? this.setState({ priceMax: value })
      : this.setState({ priceMin: value });
    const filter = {
      price: `${priceMin} - ${priceMax}`,
    };

    const { filterAdvert } = this.props;
    filterAdvert(filter, limit);
  };

  showMeLimitCards = (event) => {
    const { value } = event.target;
    this.setState({ limit: value });
    const { fetchAds } = this.props;
    fetchAds(value);
  };

  clearCookies = () => {
    localStorage.removeItem('success');
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) this.handleFilter();
  };

  render() {
    const { getStateAds } = this.props;
    const ads = getStateAds.ads;
    const msj = getStateAds.msj;
    if (!ads)
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    return (
      <DivContainerHome>
        <Nav>
          <Link to="/login">
            <LogOut onClick={this.clearCookies} type="button">
              Log out
            </LogOut>
          </Link>
          <TitleNav>YOU ARE WELCOME TO NODE-POP</TitleNav>
          <InputNav
            type="text"
            onChange={this.updateInputValue}
            onKeyUp={this.handleKeyUp}
            required
          />
          <Search onClick={this.handleFilter}> Search </Search>
        </Nav>
        <AsideContainer>
          <CompAsideLeft
            data={this.handleChangePrice}
            priceMax={this.state.priceMax}
            priceMin={this.state.priceMin}
            venta={this.handleChangeVenta}
            limit={this.showMeLimitCards}
            fields={this.showFields}
          />
          <AsideRight>
            {ads && <Cards ads={ads} />}
            <h1>{msj}</h1>
          </AsideRight>
        </AsideContainer>
      </DivContainerHome>
    );
  }
}

ListAds.propTypes = {
  fetchAds: T.func.isRequired,
  loadSession: T.func.isRequired,
  getLimit: T.number,
};

export default ListAds;
