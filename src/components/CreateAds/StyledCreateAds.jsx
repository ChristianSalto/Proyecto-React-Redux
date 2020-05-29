import styled from 'styled-components';


export const DivContainerForm = styled.div`
background: #ccc;
width:450px;
display: flex;
flex-direction: column;
margin-left:35%;
margin-top:5%;
text-align:center;
 @media(max-width: 900px){
    margin-left:10%;
   }
input{
      margin:15px;
      width:250px;
      background:transparent;
  }
  textarea{
    width:250px;
    margin-right:60px;
    resize: none;
    margin-left:20px;
  }
  label{
      margin:10px;
  }
  .desc{
     background:transparent;
     display:inline-block;
     vertical-align:middle;  
  }
  .submit{
    cursor: pointer;
    margin-left:220px;
    margin-top:30px;
    width: 150px;
    font-size:17px;
  };

  h4{
    margin-left:140px;
  };
   
  `;

export const DivContainerCreateAds = styled.div`
 h1{
   color: #519183;
   font-family: 'Amatic SC';
   font-size: 60px;
 }
  `;

export const DivCheckbox = styled.div`
display: flex;
justify-content: center;
  `;