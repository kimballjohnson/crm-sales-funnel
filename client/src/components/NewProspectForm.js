import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

function NewProspectForm({setAddingProspect, setAddingCompany, companies}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [newCompanyId, setNewCompanyId] = useState(0)
    const [stage, setStage] = useState('')
    const [probability, setProbability] = useState(0)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate()

    const createProspect = (firstName, lastName, newCompanyId, stage, probability, email, phone) => {
        fetch(`http://localhost:3000/prospects/`, {
          method: "POST",
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

      const handleSubmit = (e) => {
        e.preventDefault();
        createProspect(firstName, lastName, newCompanyId, stage, probability, email, phone);
        setAddingProspect(false)
        window.location.reload(false)
      };

      const handleCompanyChange = (e) => {
        setNewCompanyId(e.target.value);
        console.log(newCompanyId)
      };

      const makeNewCompany = () => {
        setAddingCompany(true) 
        navigate(`/companies`)
      }

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

    return(
        <div>
            <Container>
         <h1>New Prospect:</h1>
    <form onSubmit={handleSubmit} autoComplete="off">
    <h2>First Name: <Input required type="text" autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Input> </h2>
    <h2>Last Name: <Input required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></Input> </h2>
    <h2>Company:         
        <Select name="company" onChange={handleCompanyChange}>
            {companies.map(company => 
                <option value={company.id} key={company.id}>{company.name}</option>
                )}
        </Select> 
        </h2>
        <h3>Company not listed?</h3>
            <Button onClick={makeNewCompany}>Add a Company</Button>
    <h2>Stage: 
            <Select required value={stage} name="stage" onChange={handleStageChange}>
            {stages.map(stage => 
                <option value={stage} key={stage.id}>{stage}</option>
                )}
        </Select> 
        </h2>
    <h2>Probability: 
    <Select name="probability" onChange={handleProbabilityChange}>
            {probabilities.map(probability => 
                <option value={probability} key={probability.id}>{probability}%</option>
                )}
        </Select> 
    </h2>
    <h5>Contact Info:</h5>
    <h2>Email: <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input> </h2>
    <h2>Phone: <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></Input> </h2>
    <span>
        <Buttons>
    <SubmitButton type="submit">Add Prospect</SubmitButton>
    <Button onClick={() => setAddingProspect(false)}>Cancel</Button>
    </Buttons>
    </span>
    </form>
    </Container>
        </div>
    )
}

const Buttons = styled.span`
margin-left: 11vw;
margin-bottom: 5vh;
display: grid;
grid-template-columns: 10vw 10vw;
`;

const Input = styled.input`
    width: 60%;
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
  margin-bottom: 5vh;
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

const NavButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  // padding: 8px 16px;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default NewProspectForm