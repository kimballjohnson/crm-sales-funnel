import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router";

function CompanyCard({company}) {
    const [expand, setExpand] = useState(false)

    let navigate = useNavigate();

    const toDetails = () => {
        navigate(`/companies/${company.id}`)
    }

    return(
        <div>
            <Card onClick={toDetails}>
            <h1>{company.name}</h1>
            {/* {!expand ? null : 
            <div>
                <h2>Employees:</h2>
            {company.prospects.map(prospect =>
                <Test as={Link} to={`/prospects/${prospect.id}`} key={prospect.id}><li>{prospect.first_name} {prospect.last_name}</li></Test>
                )}
                
            </div>
            } */}
            </Card>
        </div>
    )
}



const Test = styled.li`

`;

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