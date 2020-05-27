import React, { Component } from 'react'
import { AsideLeft, Checkbox, Checkboxlabel, DivContainerFields, DivContainerPrice, LinkCreateAds } from './StyleAsideLeft';
import { Link } from 'react-router-dom';
/* eslint-disable */

class CompAsideLeft extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AsideLeft>
                <DivContainerPrice>
                    <div>
                        <label htmlFor="price"><h2>For prices</h2></label>
                        <div> <input type="range" min="0" max="1000" name="price" onChange={this.props.data} /></div>
                        <span>{this.props.price} $</span>
                    </div>
                    <div>
                        <Checkboxlabel htmlFor="status-sell">show me sold</Checkboxlabel>
                        <Checkbox type="checkbox" name="status-sell" onChange={this.props.venta} />
                    </div>
                </DivContainerPrice>
                <DivContainerFields>
                    <h2>You can see the fields</h2>
                    <select onChange={this.props.fields}>
                        <option>Fields</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="type">Type</option>
                        <option value="photo">Photo</option>
                        <option value="createdAt">CreatedAt</option>
                        <option value="updatedAt">UpdatedAt</option>
                    </select>
                    <label htmlFor="limit">Limit</label>
                    <input name="limit" type="number" min="1" max="20" onChange={this.props.limit} />
                    <Link to="/seeAllAds">
                        <h4>You can see all the ads here !!!</h4>
                    </Link>
                </DivContainerFields>
                <LinkCreateAds>
                    <Link to="/edit">
                        <h4>You can create your ads</h4>
                    </Link>
                </LinkCreateAds>
            </AsideLeft>
        )
    }
}

export default CompAsideLeft;