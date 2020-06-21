/* eslint-disable */

import React, { Component } from 'react';
import {
  DivContainerForm,
  DivContainerCreateAds,
  DivCheckbox,
} from './StyledCreateAds';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import T from 'prop-types';

import { createAdvert } from '../../store/selectors';

import Form from '../Form';
import Input from '../Input/Input';

class CreateAds extends Component {
  constructor(props) {
    super(props);
  }

  handleEditAds = (event) => {
    const ads = createAdvert(event);
    const { createAds } = this.props;
    createAds(ads);
  };

  render() {
    return (
      <DivContainerCreateAds>
        <h1>YOU ARE WELCOME TO CREATE ADS ENJOY !!!!!</h1>
        <Form
          onSubmit={this.handleEditAds}
          initialValue={{
            name: '',
            number: '',
            description: '',
            tags: [],
            type: '',
            photo: '',
          }}
        >
          <header></header>
          <DivContainerForm>
            <label htmlFor="name">
              Name
              <Input type="text" name="name" />
            </label>
            <label htmlFor="number">
              Price
              <Input type="number" name="number" />
            </label>
            <label htmlFor="description">
              Description
              <Input type="text" name="description" />
            </label>

            <DivCheckbox>
              <FormControlLabel
                control={<Checkbox className="input" />}
                label="work"
                name="tags"
                value="work"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="lifestyle"
                name="tags"
                value="lifestyle"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="mobile"
                name="tags"
                value="mobile"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="motor"
                name="tags"
                value="motor"
              />
            </DivCheckbox>

            <label htmlFor="type">
              Type
              <Input
                type="text"
                name="type"
                placeholder="you write only 'sell' o 'buy' "
              />
            </label>
            <label htmlFor="photo">
              Photo
              <Input type="text" name="photo" />
            </label>
            <input
              className="submit"
              type="submit"
              value="Submit"
              id="input-btn"
            />
            <Link to="/listAds">
              <h4>Home</h4>
            </Link>
          </DivContainerForm>
        </Form>
      </DivContainerCreateAds>
    );
  }
}

CreateAds.propTypes = {
  ads: T.object,
};

export default CreateAds;
