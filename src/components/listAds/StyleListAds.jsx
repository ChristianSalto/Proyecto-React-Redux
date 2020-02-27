import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  background: #403B3B;
  height: 100px;
  `;

export const Search = styled.button`
    cursor: pointer;
    outline:none;
    height: 36px;
    margin-top: 35px;
    margin-right: 15px;
    border-radius: 0px 10px 10px 0px;
    background: #FFEDEB;
    &:hover{
      background-color: #7C7372;
      color: #81E3AF
    }
`;

export const InputNav = styled.input`
  outline:none;
  background: #FFFBE0;
  height: 11px;
  margin-top: 35px;
  margin-left: auto;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
`;

export const LogOut = styled.button`
  padding:5px;
  cursor: pointer;
  margin-left:15px;
  background: #FFEDEB;
  margin-top: 35px;
  border-radius: 10px;
  font-size:15px;
  &:hover{
    background-color: #7C7372;
    color: #81E3AF
  }
`;

export const AsideContainer = styled.div`
border: 5px solid red;
display: inline-flex;
flex-direction: row;
`;

export const AsideRight = styled.div`
border: 1px solid yellow;
display: inline-flex;
flex-wrap: wrap;
width: 90%;
`;