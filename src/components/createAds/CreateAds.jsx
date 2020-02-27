import React, { Component } from 'react';
import { editAds } from '../../services/api';


class CreateAds extends Component {
    constructor(props) {
        super(props);
    }

    handleEditAds = async (event) => {
        const tags = [];
        const name = event.target.name.value;
        const price = event.target.number.value;
        const description = event.target.description.value;
        tags.push(event.target.tags.value)
        const type = event.target.type.value;
        const photo = event.target.photo.value;
        const { data } = await editAds({
            name: name,
            price: price,
            description: description,
            tags: tags,
            type: type,
            photo: photo
        });
        const { results } = data;
        console.log(results);
        console.log(name, price, tags, type, photo, description);
        debugger
    }
    /*  name: string,
   price: number,
   description: string,
   tags: Array[string],
   type: "buy" ó "sell",
   photo: string,*/

    render() {
        return (
            <div>
                <form onSubmit={this.handleEditAds}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <label htmlFor="number">Price</label>
                    <input type="number" name="number" />
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" />
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" />
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" placeholder="you write only 'sell' o 'buy' " />
                    <label htmlFor="photo">Photo</label>
                    <input type="url" name="photo" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CreateAds;

/*   name: string,
   price: number,
   description: string,
   tags: Array[string],
   type: "buy" ó "sell",
   photo: string,*/