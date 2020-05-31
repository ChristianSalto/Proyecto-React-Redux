/* eslint-disable */

import React, { Component } from 'react';
//import { editAds } from '../../services/api';
import { DivContainerForm, DivContainerCreateAds, DivCheckbox } from './StyledCreateAds';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import T from 'prop-types';

import { createAdvert } from '../../store/selectors';



class CreateAds extends Component {
    constructor(props) {
        super(props);
    }

    handleEditAds = (event) => {
        event.preventDefault();
        const ads = createAdvert(event.target);
        const { createAds } = this.props;
        createAds(ads);
        // const tags = [];
        // const name = event.target.name.value;
        // const price = parseInt(event.target.number.value);
        // const description = event.target.description.value;
        // tags.push(event.target.tags.value)
        // const type = event.target.type.value;
        // const photo = event.target.photo.value;
        // const { data } = await editAds({
        //     tags: tags,
        //     name: name,
        //     price: price,
        //     description: description,
        //     type: type,
        //     photo: photo
        // });
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

                        <DivCheckbox>
                            <FormControlLabel
                                control={
                                    <Checkbox />
                                }
                                label="work"
                                name="work"
                                value="work"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox />
                                }
                                label="lifestyle"
                                name="lifestyle"
                                value="lifestyle"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox />
                                }
                                label="mobile"
                                name="mobile"
                                value="mobile"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox />
                                }
                                label="motor"
                                name="motor"
                                value="motor"
                            />
                        </DivCheckbox>

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

CreateAds.propTypes = {
    ads: T.object,
}

export default CreateAds;