import styled from 'styled-components';

export const DivContainerHome = styled.div`
   
    display: flex;
    flex-direction: column;
`;  

export const Nav = styled.nav`
  display: flex;
  background: #67446E;
  height: 100px;
  align-items:center;
`;

export const TitleNav = styled.h1`
  margin-left:20%;
  color: #93BF60;
  font-size: 30px;
  @media(max-width: 1100px){
    margin-left:10%;
    font-size:20px;
  }
  @media(max-width: 800px){
    display:none;
  }
`;

export const Search = styled.button`
    cursor: pointer;
    outline:none;
    height: 34px;
    margin-right: 15px;
    border: 1px solid transparent;
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
  height: 12px;
  margin-left: auto;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid transparent;
  `;

export const LogOut = styled.button`
  border: 1px solid transparent;
  padding:5px;
  cursor: pointer;
  margin-left:15px;
  background: #FFEDEB;
  border-radius: 10px;
  font-size:15px;
  &:hover{
    background-color: #7C7372;
    color: #81E3AF
  }
`;

export const AsideContainer = styled.div`
display: inline-flex;
flex-direction: row;
`;

export const AsideRight = styled.div`
display: inline-flex;
justify-content: center;
flex-wrap: wrap;
border: 5px solid gray;
border-style: ridge;
border-radius: 10px;
margin: 80px;
width: 90%;
`;



