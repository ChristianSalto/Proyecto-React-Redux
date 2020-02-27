import styled from 'styled-components';

export const AsideLeft = styled.div`
border: 1px solid black;
padding:10px;
height:700px;
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
    label{
        display: block;
        padding: 5px;
    };
};
`;

export const Checkbox = styled.input`
   width: 20px; 
   height: 20px; 
   cursor: pointer; 
   margin:10px;
`;