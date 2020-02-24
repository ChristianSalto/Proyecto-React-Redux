import React, { Component } from 'react';
import { getAds, filterAds } from '../../services/api'
import Cards from '../listAds/Cards'
import { Nav, InputNav, LogOut, Search } from './StyleListAds';
import { Link } from 'react-router-dom';


class ListAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            result: [{}],
            isChecked: false,
            price: 0
        }
    }

    componentDidMount = async () => {
        const { data } = await getAds();
        const { results } = data;
        //   console.log(results);
        this.setState({ result: results });
        // console.log(this.state.result[0].name);

    }

    handleFilter = async () => {
        const { name } = this.state
        const { data } = await filterAds({ name: name });
        const { results } = data;
        console.log(results)
        if (results.length === 0) {
            const { data } = await filterAds({ tag: name });
            const { results } = data;
            this.setState({ result: results });
        } else {
            //debugger
            this.setState({ result: results });
        }
    }

    updateInputValue = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleChange = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    handleChangePrice = (event) => {
        const { value } = event.target
        this.setState({ price: value })
    }


    render() {
        return (
            <div>
                {/* <div>
                    <label for="price">Precio</label>
                    <input type="range" min="0" max="100" name="price" onChange={this.handleChangePrice} />
                    <span>{this.state.price}</span>
                </div>
                <div>
                    <input type="checkbox" name="status-sell" onChange={this.handleChange} />
                    <label for="status-sell">show me sold</label>
                </div> */}
                <Nav>
                    <Link to="/login">
                        <LogOut type="button">Log out</LogOut>
                    </Link>
                    <InputNav type="text" onChange={this.updateInputValue} />
                    <Search onClick={this.handleFilter}> Search </Search>
                </Nav>
                <Cards data={this.state.result} />
            </div>
        )
    }
}


export default ListAds;