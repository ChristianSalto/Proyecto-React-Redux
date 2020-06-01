/* eslint-disable */

import React, { Component } from 'react';
//import { filterAds } from '../../services/api';
import T from 'prop-types';
import Cards from '../Cards/Cards';
import { Nav, InputNav, LogOut, Search, AsideRight, AsideContainer, DivContainerHome, TitleNav } from './StyleListAds';
import { Link } from 'react-router-dom';
import CompAsideLeft from '../CompAsideLeft';
//import Grid from '@material-ui/core/Grid';


class ListAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            price: "0",
        }
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
        const filter = {
            fields: field,
        }
        const { filterAdvert, getLimit } = this.props;
        filterAdvert(filter, getLimit);
    }

    handleFilter = () => {
        const { name } = this.state;
        const { handleSearch, getLimit } = this.props;
        handleSearch(name, getLimit);
    }


    updateInputValue = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeVenta = () => {
        this.setState({ isChecked: !this.state.isChecked });
        const filter = {
            venta: this.state.isChecked,
        }
        const { filterAdvert, getLimit } = this.props;
        filterAdvert(filter, getLimit);
    }

    handleChangePrice = (event) => {
        const { value } = event.target;
        value.toString();
        this.setState({ price: value });
        const filter = {
            price: `0 - ${value}`,
        }
        const { filterAdvert, getLimit } = this.props;
        filterAdvert(filter, getLimit);
    }

    showMeLimitCards = (event) => {
        const { value } = event.target;
        const { fetchAds } = this.props;
        fetchAds(value);
    }

    clearCookies = () => {
        localStorage.removeItem("success");
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) this.handleFilter();
    }


    render() {
        const { getStateAds } = this.props;
        const ads = getStateAds.ads;
        const msj = getStateAds.msj;
        if (!ads) return <div><h3>Loading...</h3></div>
        return (
            <DivContainerHome>
                <Nav>
                    <Link to="/login">
                        <LogOut onClick={this.clearCookies} type="button">Log out</LogOut>
                    </Link>
                    <TitleNav>YOU ARE WELCOME TO NODE-POP</TitleNav>
                    <InputNav type="text" onChange={this.updateInputValue} onKeyUp={this.handleKeyUp} required />
                    <Search onClick={this.handleFilter}> Search </Search>
                </Nav>
                <AsideContainer>
                    <CompAsideLeft data={this.handleChangePrice} price={this.state.price}
                        venta={this.handleChangeVenta} limit={this.showMeLimitCards} fields={this.showFields} />
                    <AsideRight>
                        {ads && (
                            <Cards ads={ads} />
                        )}
                        <h1>{msj}</h1>
                    </AsideRight>
                </AsideContainer>
            </DivContainerHome>

        )
    }
}


ListAds.propTypes = {
    fetchAds: T.func.isRequired,
    loadSession: T.func.isRequired,
    getLimit: T.number,
}

export default ListAds;