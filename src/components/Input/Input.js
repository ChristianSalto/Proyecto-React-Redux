import React, { useContext } from 'react';
import { formContext } from '../Form/Form';
import './input.css';


const Input = ({ component: Component = 'input', ...props }) => {
  const { value, handleChange } = useContext(formContext);
  return (
    <Component
      className="input"
      placeholder={props.name}
      required
      {...props}
      onChange={handleChange}
      defaultValue={props.defaultValue ? props.defaultValue : value[props.name]}
    />
  );
};

export default Input;
