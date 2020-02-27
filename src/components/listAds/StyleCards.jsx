import styled from 'styled-components';

export const DivContainer = styled.div`
  justify-content: center;
  border: 1px solid black;
  display: inline-block;
  flex-wrap: wrap;
  width: 300px;
  height: 450px;
  margin: 10px;
  padding:5px;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border: 1px solid black;
`;


export const HeaderCards = styled.header`
border: 1px solid black;
  text-align: center;
  color: #002999;
  padding: 10px;
  font-size: 20px;
`
export const Tags = styled.div`
  word-break: break-all;
  word-wrap: break-word;
  border: 1px solid black;
  color:#8598CC;
  padding: 10px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black; 
  padding: 10px;
  hieght: 30px;
  span{
    margin-top: 13px;
  };
  button{
    cursor: pointer;
  };

  button:hover{
    background:blue;
    color:white;
  }
`;

export const ButtonBuy = styled.button`
  border-radius:10px;
  font-size: 15px;
`;

export const ButtonDetails = styled.button`
  font-size: 15px;
  height: 40px;
  text-align: center;
  width: 100px;
`;

export const Date = styled.div`
   border: 1px solid black;
   margin-top: 10px;
   padding:5px;
`;