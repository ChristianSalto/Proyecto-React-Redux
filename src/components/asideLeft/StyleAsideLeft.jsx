import styled from 'styled-components';

export const AsideLeft = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding:10px;
margin: 50px;
max-height: 1000px;
label{
    display: block;
    padding: 5px;
};
`;


export const DivContainerPrice = styled.div`
justify-content: center;
border: 5px solid gray;
border-style: ridge;
border-radius: 10px;
display: inline-block;
flex-wrap: wrap;
padding: 10px;
margin: 20px;
width:65%;
div{ 
  margin-top: 50px;
  padding: 10px;
  div{
    height:8px;
    background:gray;
        input{
          margin-top: -30px;
            cursor: pointer;
        };
      };
};
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
   padding: 10px;
   justify-content: center;
   border: 5px solid gray;
   border-radius: 10px;
   border-style: ridge;
   display: inline-block;
   flex-wrap: wrap;
   select{
     cursor: pointer;
     margin-top:20px;
     background: transparent;
     border:0,5px;
     font-size: 14px;
     height: 30px;
     padding: 5px;
     width: 250px;
    };
    label{
      margin-top:120px;
    };
    input{
      background: transparent;
      border:0,5px;
    }
    `;

export const LinkCreateAds = styled.div`
    margin-top:90px;
`;

