import React, { Component } from 'react';
import { getAds, filterAds } from '../../services/api';
import Cards from '../listAds/Cards';
import { Nav, InputNav, LogOut, Search, AsideRight, AsideContainer } from './StyleListAds';
import { Link } from 'react-router-dom';
import CompAsideLeft from '../asideLeft/CompAsideLeft'


class ListAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [{}],
            isChecked: true,
            price: 0,
            limit: 1,
            msj: ""
        }
    }

    componentDidMount = async () => {
        const { data } = await getAds();
        const { results } = data;
        this.setState({ result: results });
    }

    showFields = async (event) => {
        const field = event.target.value;
        const { data } = await filterAds({ fields: field }, this.state.limit);
        const { results } = data;
        this.setState({ result: results });
    }

    handleFilter = async () => {
        const { name } = this.state
        const { data } = await filterAds({ name: name }, this.state.limit);
        const { results } = data;
        //console.log(results)
        if (results.length === 0) {
            const { data } = await filterAds({ tag: name }, this.state.limit);
            const { results } = data;
            if (results.length === 0) {
                this.setState({ result: results, msj: "we are so sorry we don't have those ads" })
            } else {
                this.setState({ result: results, msj: "" });
            }
        } else {
            this.setState({ result: results, msj: "" });
        }
    }

    updateInputValue = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeVenta = async () => {
        this.setState({ isChecked: !this.state.isChecked });
        const { data } = await filterAds({ venta: this.state.isChecked }, this.state.limit);
        const { results } = data;
        console.log(results);
        this.setState({ result: results, msj: "" });
    }

    handleChangePrice = async (event) => {
        const { value } = event.target;
        console.log(value);
        this.setState({ price: value });
        const { data } = await filterAds({ price: 1 - value }, this.state.limit);
        const { results } = data;
        console.log(results);
        this.setState({ result: results, msj: "" });
    }

    showMeLimitCards = (event) => {
        const { value } = event.target;
        console.log(value);
        this.setState({ limit: value, msj: "" });
        console.log(this.state.limit);
    }


    render() {

        return (
            <div>
                <Nav>
                    <Link to="/login">
                        <LogOut type="button">Log out</LogOut>
                    </Link>
                    <InputNav type="text" onChange={this.updateInputValue} required />
                    <Search onClick={this.handleFilter}> Search </Search>
                </Nav>
                <AsideContainer>
                    <CompAsideLeft data={this.handleChangePrice} price={this.state.price}
                        venta={this.handleChangeVenta} limit={this.showMeLimitCards} fields={this.showFields} />
                    <AsideRight>
                        <Cards data={this.state.result} />
                        <h1>{this.state.msj}</h1>
                    </AsideRight>
                </AsideContainer>
            </div>
        )
    }
}


export default ListAds;