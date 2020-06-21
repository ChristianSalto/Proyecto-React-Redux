import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: ${(props) => props.primary ? '#A86FB0' : '#63695D'};
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: 2px solid transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
  outline: none;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #FFABD4;
    color: #7C7372;
  }
`;

// export const InputStyle = styled.input`
//   border: none;
//   outline: none;
//   border-bottom: 2px solid #63695D;
//   transition: ease-in-out, background-color .35s ease-in-out;
//   :focus{
//     background-color: #E6D5D3;
//   }
// `;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  border-radius: 10px;
  padding: 20px;
  background: #FFEDEB;
  margin: 5%;
  height: 500px;
`;

export const FieldContainer = styled.div`
  padding: 20px;
  label {
    margin-right: 10px;
    color: #403B3B;
  }
`;


export const FieldTitle = styled.div`
  margin: 50px;
  color: #403B3B;
`;

export const FieldError = styled.div`
  color:red;
  font-size:25px;
  margin: 20px;
`;
