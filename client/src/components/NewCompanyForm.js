import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NewCompanyForm({setAddingCompany}) {
    const [name, setName] = useState('')

    const createCompany = (name) => {
        fetch("http://localhost:3000/companies", {
            // mode: 'no-cors',
          method: "POST",
          headers : { 
            'Content-Type': 'application/json'
            // ,
            // 'Accept': 'application/json'
           }
    ,
          body: JSON.stringify({
            name: name
          }),
        })
          .then((response) => response.json())
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        createCompany(name);
        // fetch(`/shipping_infos/${id}`)
        // .then((res) => res.json())
        // .then((data) => {
        //   setShipping(data);
        // });
      };

    
    return(
        <div>
            <Container>
         <h1>New Company:</h1>
    <form onSubmit={handleSubmit}>
    <h2><Input required type="text" value={name} onChange={(e) => setName(e.target.value)}></Input> </h2>
    <Buttons>
    <SubmitButton type="submit">Add Company</SubmitButton>
    <Button onClick={() => setAddingCompany(false)}>Cancel</Button>
    </Buttons>
    </form>
    </Container>
        </div>
    )
}

const Buttons = styled.span`
margin-left: 11vw;
display: grid;
grid-template-columns: 10vw 10vw;
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

export default NewCompanyForm