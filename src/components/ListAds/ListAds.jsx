import React, { Component } from 'react';
//import { filterAds } from '../../services/api';
import Cards from './Cards';
import { Nav, InputNav, LogOut, Search, AsideRight, AsideContainer, DivContainerHome, TitleNav } from './StyleListAds';
import { Link } from 'react-router-dom';
import CompAsideLeft from '../CompAsideLeft';


class ListAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // result: [{}],
            isChecked: true,
            price: "0",
            //  limit: 6,
            // msj: "",
            stateAvanced: true
        }
    }

    componentWillMount() {
        const { fetchAds, getStateUser, loadSession, getLimit } = this.props;
        fetchAds(getLimit);
        getStateUser;
        if (getStateUser.length === 0) {
            loadSession();
        }
        //const ads = getStateAds();
        // console.log(...getStateAds)
        // const { data } = await getAds();
        // const { results } = data;
        // this.setState({ result: results });
    }


    showFields = (event) => {
        const field = event.target.value;
        // const limit = 6;
        const filter = {
            fields: field,
        }
        const { filterAdvert, getLimit } = this.props;
        filterAdvert(filter, getLimit);

        // const { data } = await filterAds({ fields: field }, this.state.limit);
        // const { results } = data;
        // this.setState({ result: results });
    }

    handleFilter = () => {
        const { name } = this.state;
        //  const limit = 6;
        const { handleSearch, getLimit } = this.props;
        handleSearch(name, getLimit);

        // const { data } = await filterAds({ name: name }, this.state.limit);
        // const { results } = data;
        // if (results.length === 0) {
        //     const { data } = await filterAds({ tag: name }, this.state.limit);
        //     const { results } = data;
        //     if (results.length === 0) {
        //         this.setState({ result: results, msj: "we are so sorry we don't have those ads" })
        //     } else {
        //         this.setState({ result: results, msj: "" });
        //     }
        // } else {
        //     this.setState({ result: results, msj: "" });
        // }
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
        // const { data } = await filterAds({ venta: this.state.isChecked }, this.state.limit);
        // const { results } = data;
        // this.setState({ result: results, msj: "" });
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

        // const { data } = await filterAds({ price: `1 - ${value}` }, this.state.limit);
        // const { results } = data;
        // this.setState({ result: results, msj: "" });

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
                        {ads ? (
                            <Cards ads={ads} />
                        ) : (
                                <div></div>
                            )}
                        <h1>{msj}</h1>
                    </AsideRight>
                </AsideContainer>
            </DivContainerHome>

        )
    }
}


export default ListAds;