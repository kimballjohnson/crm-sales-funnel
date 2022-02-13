import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useNavigate} from "react-router";
import { Link } from "react-router-dom";
import EditCompanyForm from "./EditCompanyForm"

function CompanyDetails({setAddingProspect, loadingProspects}) {
    const [companyDetails, setCompanyDetails] = useState([]);
    const [companyProspects, setCompanyProspects] = useState([]);
    const [edit, setEdit] = useState(false)

    let navigate = useNavigate();

    const id = useParams().id;

    const addProspect = () => {
        setAddingProspect(true)
        navigate(`/`)
    }

useEffect(() => {
    fetch(`/companies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCompanyDetails(data);
        setCompanyProspects(data.prospects);
      });
    }, [id]);

  return(
      <div>

             {!edit ? 
         <Container>
            <h1>{companyDetails.name}</h1>
            {loadingProspects ? 
             <Loading>
             <h1>Loading Employees...</h1>
             <h3>(This could take a minute)</h3>
             <Img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
         </Loading>
            :
            <div>
              {companyProspects.length === 0 ? <h3>There are no prospects currently employed at {companyDetails.name}</h3>
              :
              <div>
                <h3>Employees:</h3>
            {companyProspects.map(prospect =>
                <Li as={Link} to={`/${prospect.id}`} key={prospect.id}><ul>{prospect.first_name} {prospect.last_name}</ul></Li>
                )}
                </div>}
                <Buttons>
                <Button onClick={() => setEdit(!edit)}>Edit this Company</Button>
                <Button onClick={addProspect}>Add a Prospect</Button>
                </Buttons>
                </div>
                }
            </Container>
                :
                <EditCompanyForm company={companyDetails} edit={edit} setEdit={setEdit}/>
            }
    
      </div>
  )
}


const Buttons = styled.span`
margin-left: 9vw;
display: grid;
grid-template-columns: 12vw 12vw;
margin-bottom: 5vh;
`;

const Button = styled.button`

  margin-top: 1%;
  margin-left: 1%;
  width: 10vw;
  height: 6vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  /* border: 3px solid #2E6268; */
  transition: all .35s;
  justify-content: center;
  font-size: 1.5vh;
  
    &:hover {
      width: 12vw;
      border: 3px solid #7F7F7F;
      background: transparent;
      color: #7F7F7F;
      cursor: pointer;
    }
  `;


const Loading = styled.div`
display: flex;
flex-direction: column;
// margin-left: 20vw;
// margin-right: 20vw;
margin-top: 5vh;
margin-bottom: 5vh;
align-items: center;
justify-content: center;
`;

const Img = styled.img`
height: 8vh;
width: 5vw;
`;


const Li = styled.li`
`;


const Container = styled.div`
  margin-left: 30vw;
  margin-right: 30vw;
  margin-top: 10vh;
  margin-bottom: 20vh;
  max-height: 80vh;
  background-color: #FFFFFF;
  border-radius: 10px;
  overflow-y: auto;
  position: relative;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 5px 0px #DBDBDB;
  &::-webkit-scrollbar {
      width: 10px;
  }
`;


export default CompanyDetails