import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NewProspectForm from "./NewProspectForm"

function CompanyCard({company, companies}) {
    const [expand, setExpand] = useState(false)
    const [add, setAdd] = useState(false)
    return(
        <div>
            <Card onClick={() => setExpand(!expand)}>
            <h1>{company.name}</h1>
            {!expand ? null : 
            <div>
                <h2>Employees:</h2>
            {company.prospects.map(prospect =>
                <Test as={Link} to={`/prospects/${prospect.id}`}><li>{prospect.first_name} {prospect.last_name}</li></Test>
                )}
                {/* <Button onClick={() => setAdd(true)}>Add a Prospect to this company</Button>
                {!add ? null : 
            <NewProspectForm companies={companies}/>
                } */}
            </div>
            }
            </Card>
        </div>
    )
}

const Button = styled.button`

  margin-top: 1%;
  margin-left: 1%;
  width: 8vw;
  height: 6vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  /* border: 3px solid #2E6268; */
  transition: all .35s;
  justify-content: center;
  font-size: 1.5vh;
  
    &:hover {
      width: 10vw;
      border: 3px solid #7F7F7F;
      background: transparent;
      color: #7F7F7F;
      cursor: pointer;
    }
  `;



const Test = styled.li`

`;

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
background-color: grey;
border-radius: 15px;
&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
  cursor: pointer;
  color: #8F8F8F;
}
`;

export default CompanyCard;