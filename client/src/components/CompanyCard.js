import React, {useState} from "react";
import styled from "styled-components";

function CompanyCard({company}) {
    const [expand, setExpand] = useState(false)

    return(
        <div>
            <Card onClick={() => setExpand(!expand)}>
            <h1>{company.name}</h1>
            {!expand ? null : 
            <div>
                <h2>Employees:</h2>
            {company.prospects.map(prospect =>
                <li>{prospect.first_name} {prospect.last_name}</li>
                )}
            </div>
            }
            </Card>
        </div>
    )
}

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
height: 40vh;
width: 30vw;
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

export default CompanyCard;