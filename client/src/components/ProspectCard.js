import React, {useState} from "react";
import styled from "styled-components";

function ProspectCard({prospect}) {
    const [expand, setExpand] = useState(false)
console.log(prospect)
    return(
        <div>
            <Card onClick={() => setExpand(!expand)}>
            <h3>Name: {prospect.first_name} {prospect.last_name}</h3>
            <h3>Stage: {prospect.stage}</h3>
            {!expand ? null : 
            <div>
            <p>Current company: {prospect.company.name === null ? "None" : prospect.company.name}</p>
            <p>Probability: {prospect.probability}%</p>
            <p>{prospect.email}</p>
            <p>{prospect.phone}</p>
            </div>}
            {!expand ? '↧' : '↥'}
            </Card>
        </div>
    )
}

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
height: 20vw;
width: 15vw;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
text-align: center;
border: 2px solid grey;
background-color: rgb(50, 50, 50);
border-radius: 15px;
&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
  cursor: pointer
}
`;

export default ProspectCard