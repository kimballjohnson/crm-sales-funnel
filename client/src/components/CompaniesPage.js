import React from "react";
import CompanyCard from "./CompanyCard"
import styled from "styled-components";

function CompaniesPage({companies}) {

    const existingCompanies = companies.filter(company => company.name !== null)

    return(
        <div>
            <Container>
        {existingCompanies.map(company => 
        <CompanyCard company={company}/>
            )}
            </Container>
    </div>
    )
}

const Container = styled.div`

  margin-top: 50px;
  margin-left: 10vw;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 40vw 40vw;

`;

export default CompaniesPage