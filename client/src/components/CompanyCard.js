import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function CompanyCard({company}) {

    let navigate = useNavigate();

    const toDetails = () => {
        navigate(`/companiespage/${company.id}`)
    }

    return(
        <div>
            <Card onClick={toDetails}>
            <h1>{company.name}</h1>
            </Card>
        </div>
    )
}

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px;
height: 30vh;
width: 20vw;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
text-align: center;
border: 2px solid grey;
background-color: transparent;
transition: all .35s;
// border-radius: 15px;
&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
  cursor: pointer;
  color: #8F8F8F;
  height: 35vh;
    width: 25vw;
    background-color: rgb(37, 38, 51);
    opacity: 0.5;
}
`;

export default CompanyCard;