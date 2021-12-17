import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function EditCompanyForm({company, edit, setEdit}) {

    const [newCompany, setNewCompany] = useState(company.name)
   

    const editCompany = (newCompany) => {
        fetch(`http://localhost:3000/companies/${company.id}`, {
            // mode: 'no-cors',
          method: "PATCH",
          headers: { 
            // 'Access-Control-Allow-Origin':'*' ,  
            "Content-Type": "application/json" },
          body: JSON.stringify({
            name: newCompany
          }),
        })
        //   .then((response) => response.json())
      };

      const deleteCompany = (company) => {
        fetch(`/companies/${company.id}`, {
          method: "DELETE",
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        editCompany(newCompany);
      };

    //   const handleCompanyChange = (e) => {
    //     setNewCompany(e.target.value);
    //   };

    return(
        <div>
            <Container>
         <h1>Edit Company:</h1>
    <form onSubmit={handleSubmit} autoComplete="off">
    <h2>Company Name: <Input required type="text" autoComplete="off" value={newCompany} onChange={(e) => setNewCompany(e.target.value)}></Input> </h2>
    
        <Buttons>
    <DeleteButton onClick={deleteCompany}>Delete Company</DeleteButton>
    <SubmitButton type="submit">Save Company</SubmitButton>
    </Buttons>
    </form>
    <Button onClick={() => setEdit(!edit)}>Cancel</Button>
    </Container>
        </div>
    )
}

const Buttons = styled.span`
margin-left: 11vw;
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
  max-height: 100vh;
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

export default EditCompanyForm