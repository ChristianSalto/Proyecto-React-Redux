import styled from 'styled-components';

export const DivContainer = styled.div`
  justify-content: center;
  border: 3px solid gray;
  border-styled: groove;
  display: inline-block;
  flex-wrap: wrap;
  width: 300px;
  height: 450px;
  margin: 10px;
  padding:5px;
  border-radius: 10px;
  background: rgb(222, 191, 228);
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`;


export const HeaderCards = styled.header`
  text-align: center;
  color: #066A62;
  padding: 10px;
  font-size: 20px;
`;
export const Tags = styled.div`
  word-break: break-all;
  word-wrap: break-word;
  background:#6E4D3D;
  color:#8598CC;
  padding: 10px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top:2%;
  padding: 10px;
  hieght: 30px;
  span{
    margin-top: 13px;
  };
  button{
    cursor: pointer;
    outline:none;
  };

  button:hover{
    background:#51918C;
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
   background: #BA8B7B;
   margin-top: 10px;
   padding: 5px;
`;