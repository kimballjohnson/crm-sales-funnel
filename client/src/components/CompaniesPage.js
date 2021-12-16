import React, {useState} from "react";
import CompanyCard from "./CompanyCard"
import styled from "styled-components";
import NewCompanyForm from "./NewCompanyForm"

function CompaniesPage({companies, addingCompany, setAddingCompany, loading}) {
    // const [adding, setAdding] = useState(false)
    const [search, setSearch] = useState('')

    const companiesToDisplay = companies.filter(company => 
        company.name.toLowerCase().includes(search.toLowerCase()) 
        )
    return(
        <div>
            {loading ? 
              <div>
              <Loading>
                  <h1>Loading Companies...</h1>
                  <h3>(This could take a minute)</h3>
                  <Img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
              </Loading>
          </div> 
            : 
            <div> 
            <Input type='text' placeholder="Search for a Company" value={search} onChange={(e) => setSearch(e.target.value)}/>
        {/* <Buttons> */}
            {/* {addingCompany ? null : <Button onClick={() => setAddingCompany(true)}>Add New Company</Button>} */}
            {!addingCompany ? 
            <Button onClick={() => setAddingCompany(true)}>Add New Company</Button>
            : <NewCompanyForm setAddingCompany={setAddingCompany}/>}
        {/* </Buttons> */}
            {companiesToDisplay.length === 0 ? <h2>No Companies Matched Your Search</h2> :
            <Container>
        {companiesToDisplay.map(company => 
        <CompanyCard key={company.id} company={company} companies={companies}/>
            )}
            </Container>
}
</div>}
    </div>
    )
}

const Loading = styled.div`
display: flex;
flex-direction: column;
margin-left: 20vw;
margin-right: 20vw;
margin-top: 15vh;
align-items: center;
justify-content: center;
`;

const Img = styled.img`
height: 8vh;
width: 5vw;
`;



const Input = styled.input`
    width: 85%;
    height: 5vh;
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
position: absolute;
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
      width: 8vw;
      height: 8vh;
      border: 3px solid #7F7F7F;
      background: transparent;
      color: #7F7F7F;
      cursor: pointer;
    }
  `;

const Container = styled.div`
// align-items: center;
// justify-content: center;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 7vh;
  margin-bottom: 2vh;
  max-height: 80vh;
//   background-image: linear-gradient(rgb(37, 38, 51), rgb(60, 60, 60), rgb(37, 38, 51), rgb(60, 60, 60), rgb(37, 38, 51));
  background-color: rgb(60, 60, 60);
//   border-radius: 10px;
  overflow-y: auto;
  position: relative;
//   box-shadow: 0px 0px 5px 0px #DBDBDB;
  display: grid;
  grid-template-columns: 30vw 30vw 30vw;
  &::-webkit-scrollbar {
      width: 10px;
  }
`;

export default CompaniesPage