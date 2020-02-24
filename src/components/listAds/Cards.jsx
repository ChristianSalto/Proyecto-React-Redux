import React, { Fragment } from 'react';
import { DivContainer, Img, HeaderCards, Tags } from './StyleCards'
import Photo from '../../img/no-photo.jpg'

function Cards(props) {
    return (
        <Fragment>
            {
                props.data.map((ads) => {
                    console.log(ads);
                    return (
                        <DivContainer>
                            <HeaderCards>{ads.name}</HeaderCards>
                            <div><Img src={ads.photo === "photo" ? Photo : ads.photo} alt="..." /></div>
                            <Tags>{ads.tags === undefined ? "" : ads.tags.map((item) => { return item }).join(",")}</Tags>
                            <p>{ads.description}</p>
                            <span>{ads.price}$</span>
                            <button>{ads.type}</button>
                        </DivContainer>
                    )
                })
            }
        </Fragment>
    )
}



export default Cards