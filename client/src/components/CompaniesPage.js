import React, {useState} from "react";
import CompanyCard from "./CompanyCard"
import styled from "styled-components";
import NewCompanyForm from "./NewCompanyForm"

function CompaniesPage({companies, addingCompany, setAddingCompany}) {
    // const [adding, setAdding] = useState(false)
    const [search, setSearch] = useState('')

    const companiesToDisplay = companies.filter(company => 
        company.name.toLowerCase().includes(search.toLowerCase()) 
        )
    return(
        <div>

            <Input type='text' placeholder="Search for a Company" value={search} onChange={(e) => setSearch(e.target.value)}/>
            
            <Container>
        {companiesToDisplay.map(company => 
        <CompanyCard company={company} companies={companies}/>
            )}
            </Container>
        <Buttons>
            {addingCompany ? null : <Button onClick={() => setAddingCompany(true)}>Add New Company</Button>}
            {!addingCompany ? null : <NewCompanyForm setAddingCompany={setAddingCompany}/>}
        </Buttons>
    </div>
    )
}

const Buttons = styled.span`
align-items: center;
justify-content: center;
position: relative;
height: 500;
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

const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 7vh;
  margin-bottom: 2vh;
  max-height: 60vh;
  background-color: #FFFFFF;
  border-radius: 10px;
  overflow-y: auto;
  position: relative;
  box-shadow: 0px 0px 5px 0px #DBDBDB;
  display: grid;
  grid-template-columns: 40vw 40vw;
  &::-webkit-scrollbar {
      width: 10px;
  }
`;

export default CompaniesPage