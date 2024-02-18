import styled from "styled-components";
const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
min-width:220px;
border: none;
font-size: 16px;
transition: 0.4s background ease-in;
cursor: pointer;


&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`;

export default Button;

export const OutlineBtn = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;

&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
}
`;