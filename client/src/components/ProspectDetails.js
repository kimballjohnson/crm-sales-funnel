import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useNavigate} from "react-router";



function ProspectDetails() {
    const [prospectDetails, setProspectDetails] = useState([]);
    const [company, setCompany] = useState({});

    let navigate = useNavigate();

    const id = useParams().id;

useEffect(() => {
   
    fetch(`http://localhost:3000/prospects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProspectDetails(data);
        setCompany(data.company.name)
      });
    }, [id]);



  return(
      <div>
         <Container>
            <h3>First Name: {prospectDetails.first_name}</h3>
            <h3>Last Name: {prospectDetails.last_name}</h3>
            <h3>Current Company: {company === null ? "None" : company}</h3>
            <h3>Stage: {prospectDetails.stage}</h3>
            <h3>Probability: {prospectDetails.probability}</h3>
            <h5>Contact Info:</h5>
            <h4>Email: {prospectDetails.email === null ? "No Email Address on File" : prospectDetails.email}</h4>
            <h4>Phone: {prospectDetails.phone === null ? "No Phone Number on File" : prospectDetails.phone}</h4>
        </Container>
      </div>
  )
}

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


export default ProspectDetails