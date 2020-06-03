import styled from 'styled-components';

export const AsideLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;

  label {
    display: block;
    padding: 5px;
  }
`;

export const DivContainerPrice = styled.div`
  justify-content: center;
  border: 5px solid gray;
  border-style: ridge;
  margin: 10px;
  border-radius: 10px;
  display: inline-block;
  flex-wrap: wrap;
  padding: 10px;
  width: 45%;
  div {
    padding: 10px;
    div {
      input {
        -webkit-appearance: none;
        width: 100%;
        height: 25px;
        background: gray;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        cursor: pointer;
      }
    }
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Checkboxlabel = styled.label`
  margin-top: 150px;
  font-size: 20px;
`;

export const DivContainerFields = styled.div`
  margin: 10px;
  padding: 10px;
  justify-content: center;
  border: 5px solid gray;
  border-radius: 10px;
  border-style: ridge;
  display: inline-block;
  flex-wrap: wrap;
  width: 45%;
  select {
    cursor: pointer;
    margin-top: 20px;
    background: transparent;
    border: 0, 5px;
    font-size: 14px;
    height: 30px;
    padding: 5px;
    width: 250px;
  }
  label {
    margin-top: 120px;
  }
  input {
    background: transparent;
    border: 0, 5px;
  }
`;

// export const LinkCreateAds = styled.div`
//   margin-top: 90px;
// `;
