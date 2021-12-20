import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

function EditProspectForm({prospect, company, companies, setAddingCompany, edit, setEdit}) {
    const [firstName, setFirstName] = useState(prospect.first_name)
    const [lastName, setLastName] = useState(prospect.last_name)
    const [newCompanyId, setNewCompanyId] = useState(company.id)
    const [stage, setStage] = useState(prospect.stage)
    const [probability, setProbability] = useState(prospect.probability)
    const [email, setEmail] = useState(prospect.email)
    const [phone, setPhone] = useState(prospect.phone)

    const navigate = useNavigate()

    const editProspect = (firstName, lastName, newCompanyId, stage, probability, email, phone) => {
        fetch(`/prospects/${prospect.id}`, {
          method: "PATCH",
          headers: { 
            "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            company_id: newCompanyId,
            stage: stage,
            probability: probability,
            email: email,
            phone: phone
          }),
        })
          .then((response) => response.json())
      };

      const makeNewCompany = () => {
        setAddingCompany(true) 
        navigate(`/companiespage`)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        editProspect(firstName, lastName, newCompanyId, stage, probability, email, phone);
        navigate(`/prospectspage`)
        window.location.reload(false)
          setEdit(false)
      };

      const handleCompanyChange = (e) => {
        setNewCompanyId(e.target.value);
      };

      const stages = [
        'Diligence',
        'Lead',
        'Contacted',
        'Closed',
        'Rejected'
    ]

       const handleStageChange = (e) => {
        setStage(e.target.value);
      };

      const probabilities = Array.from(Array(106).keys())

      const handleProbabilityChange = (e) => {
        setProbability(e.target.value);
      };


      const deleteProspect = (prospectId) => {
        fetch(`/prospects/${prospectId}`, {
          method: "DELETE",
        });
      };

      const handleDelete = () => {
          deleteProspect(prospect.id)
          navigate(`/prospectspage`)
          window.location.reload(false)
      }

    return(
        <div>
            <Container>
         <h1>Edit Prospect:</h1>
    <form onSubmit={handleSubmit} autoComplete="off">
    <h2>First Name: <Input required type="text" autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Input> </h2>
    <h2>Last Name: <Input required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></Input> </h2>
    <h2>Company:         
        <Select name="company" onChange={handleCompanyChange}>
            {companies.map(company => 
                <option key={company.id} value={company.id}>{company.name}</option>
                )}
        </Select> 
        </h2>
        <h3>Company not listed?</h3>
        <Button onClick={makeNewCompany}>Add a Company</Button>
    <h2>Stage: 
            <Select value={stage} name="stage" onChange={handleStageChange}>
            {stages.map(stage => 
                <option value={stage} key={stage.id}>{stage}</option>
                )}
        </Select> 
        </h2>
    <h2>Probability: 
    <Select value={probability} name="probability" onChange={handleProbabilityChange}>
            {probabilities.map(probability => 
                <option value={probability} key={probability.id} >{probability}%</option>
                )}
        </Select> 
    </h2>
    <h5>Contact Info:</h5>
    <h2>Email: <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input> </h2>
    <h2>Phone: <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></Input> </h2>
    <span>
    <SubmitButton type="submit">Save Prospect</SubmitButton>
    </span>
    </form>
        <Buttons>
    <DeleteButton onClick={handleDelete}>Delete Prospect</DeleteButton>
    <Button onClick={() => setEdit(!edit)}>{!edit ? 'Edit this Prospect' : 'Cancel'}</Button>
    </Buttons>
    </Container>
        </div>
    )
}



const Buttons = styled.span`
margin-left: 10.5vw;
display: grid;
grid-template-columns: 10vw 10vw 10vw;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid #E3E3E3;
font-size: large;
margin-top: 2vh;
margin-left: 1vw;
outline: none;
&:focus {
    outline: none;
    border-bottom: 2px solid #7F7F7F;
}
`;

const Select = styled.select`
    
    border: none;
    border-bottom: 2px solid #E3E3E3;
font-size: large;
margin-top: 2vh;
margin-left: 1vw;
outline: none;
&:focus {
    outline: none;
    border-bottom: 2px solid #7F7F7F;
}
`;

const SubmitButton = styled.button.attrs({ 
    type: 'submit',
    value: 'Submit'
  })`
  margin-top: 1%;
  margin-left: 1%;
  width: 8vw;
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
      width: 10vw;
      border: 3px solid #7F7F7F;
      background: transparent;
      color: #7F7F7F;
      cursor: pointer;
    }
  `;

  const DeleteButton = styled.button`

  margin-top: 1%;
  margin-left: 1%;
  width: 8vw;
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
      width: 10vw;
      border: 3px solid red;
      background: transparent;
      color: red;
      cursor: pointer;
    }
  `;
  
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
  color: rgb(37, 38, 51);
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


  const Container = styled.div`
  margin-left: 30vw;
  margin-right: 30vw;
  margin-top: 5vh;
  margin-bottom: 20vh;
  max-height: 120vh;
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

export default EditProspectForm