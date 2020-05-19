/* eslint-disable */

import React, { Component } from 'react';
import { editAds } from '../../services/api';
import { DivContainerForm, DivContainerCreateAds } from '../createAds/StyledCreateAds';
import { Link } from 'react-router-dom';


class CreateAds extends Component {
    constructor(props) {
        super(props);
    }

    handleEditAds = async (event) => {
        event.preventDefault();
        const tags = [];
        const name = event.target.name.value;
        const price = parseInt(event.target.number.value);
        const description = event.target.description.value;
        tags.push(event.target.tags.value)
        const type = event.target.type.value;
        const photo = event.target.photo.value;
        const { data } = await editAds({
            tags: tags,
            name: name,
            price: price,
            description: description,
            type: type,
            photo: photo
        });
    }

    render() {
        return (
            <DivContainerCreateAds>
                <h1>YOU ARE WELCOME TO CREATE ADS ENJOY  !!!!!</h1>
                <form onSubmit={this.handleEditAds}>
                    <header></header>
                    <DivContainerForm>
                        <label htmlFor="name">Name
                    <input type="text" name="name" />
                        </label>
                        <label htmlFor="number">Price
                    <input type="number" name="number" />
                        </label>
                        <label htmlFor="description">Description
                    <textarea className="desc" type="text" name="description" />
                        </label>
                        <label htmlFor="tags">Tags
                    <input type="text" name="tags" />
                        </label>
                        <label htmlFor="type">Type
                    <input type="text" name="type" placeholder="you write only 'sell' o 'buy' " />
                        </label>
                        <label htmlFor="photo">Photo
                    <input type="text" name="photo" />
                        </label>
                        <input className="submit" type="submit" value="Submit" />
                        <Link to="/listAds">
                            <h4>Home</h4>
                        </Link>
                    </DivContainerForm>
                </form>
            </DivContainerCreateAds>
        )
    }
}

export default CreateAds;