import React, { Fragment } from 'react';
import { DivContainer, Img, Date, HeaderCards, Tags, ContainerPrice, ButtonDetails, ButtonBuy } from './StyleCards'
import Photo from '../../img/no-photo.jpg';
import { Link } from 'react-router-dom';



function Cards(props) {
    return (
        <Fragment>
            {
                props.data.map((ads) => {
                    return (
                        <DivContainer>
                            <HeaderCards>{ads.name}</HeaderCards>
                            <div><Img src={ads.photo === "photo" ? Photo : ads.photo} alt="..." /></div>
                            <Tags>{ads.tags === undefined ? "" : ads.tags.map((item) => { return item }).join(",")}ñsoidfhñsdhgñsdhfgkñjsdfhglkjsfhgkjshñfkj</Tags>
                            <Date>
                                <span>{ads.createdAt}</span>
                                <span>{ads.updatedAt}</span>
                            </Date>
                            <ContainerPrice>
                                <Link to={{
                                    pathname: "/details",
                                    props: ads._id
                                }}>
                                    <ButtonDetails>Details</ButtonDetails>
                                </Link>
                                <span>{ads.price} $</span>
                                <ButtonBuy>{ads.type}</ButtonBuy>
                            </ContainerPrice>
                        </DivContainer>
                    )
                })
            }
        </Fragment>
    )
}


export function Card(props) {
    const data = [];
    data.push(props.data);
    return (
        <Fragment>
            {
                data.map((ad) => {
                    return (
                        <DivContainer>
                            <HeaderCards>{ad.name}</HeaderCards>
                            <div><Img src={ad.photo === "photo" ? Photo : ad.photo} alt="..." /></div>
                            <Tags>{ad.tags === undefined ? "" : ad.tags.map((item) => { return item }).join(",")}ñsoidfhñsdhgñsdhfgkñjsdfhglkjsfhgkjshñfkj</Tags>
                            <Date>
                                <span>{ad.createdAt}</span>
                                <span>{ad.updatedAt}</span>
                            </Date>
                            <div>{ad.description}</div>
                            <ContainerPrice>
                                <span>{ad.price} $</span>
                                <ButtonBuy>{ad.type}</ButtonBuy>
                            </ContainerPrice>
                        </DivContainer>
                    )
                })
            }
        </Fragment>
    )
}



export default Cards