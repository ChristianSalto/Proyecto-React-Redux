import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Layout, Input, FieldContainer, FieldTitle, FieldError } from './StyleRegister';


const Form = ({ handleForm, name, path, error, color, nameButton, value }) => {

    const [data, setDatas] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const { value, name, password } = event.target;
        //console.log(event.target.value);
        setDatas({
            ...data,
            [name]: value,
            [password]: value
        })
    }

    return (
        <Layout>
            <form onSubmit={handleForm}>
                <FieldTitle><h1>{name}</h1></FieldTitle>
                <FieldContainer>
                    <label htmlFor="username">Username</label>
                    <Input
                        placeholder="username"
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        defaultValue={value}
                        required
                    />
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="password">Password</label>
                    <Input
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        required
                    />
                </FieldContainer>
                <FieldContainer>
                    <Button primary={color} type="submit">{name}</Button>
                    <Link to={path}>
                        <Button secundary={color} type="button">{nameButton}</Button>
                    </Link>
                </FieldContainer>
                <FieldError className="error">{error}</FieldError>
            </form>
        </Layout>
    )
}


export default Form;