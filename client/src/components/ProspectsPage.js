import React, {useState} from "react";
import ProspectCard from "./ProspectCard"
import NewProspectForm from "./NewProspectForm"
import styled from "styled-components";

function ProspectsPage({prospects, loading, companies, addingProspect, setAddingProspect, setAddingCompany}) {
    const [search, setSearch] = useState('')

    const prospectsToDisplay = prospects.filter(prospect => 
        (prospect.first_name.toLowerCase() + ' ' + prospect.last_name.toLowerCase()).includes(search.toLowerCase()) 
        )

    return(
        <Page>
            {loading ? 
            <div>
                <Loading>
                    <h1>Loading Prospects...</h1>
                    <h3>(This could take a minute)</h3>
                    <Img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
                </Loading>
            </div>
             
            :
            <div>
            <Input type='text' placeholder="Search by Name" value={search} onChange={(e) => setSearch(e.target.value)}/>
                {!addingProspect ? 
                <Button onClick={() => setAddingProspect(!addingProspect)}>Add a Prospect</Button>
                : <NewProspectForm setAddingProspect={setAddingProspect} setAddingCompany={setAddingCompany} companies={companies}/>}
                
            {prospectsToDisplay.length === 0 ? <h2>No Prospects Matched Your Search</h2> :
            <div> 
            <Span>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Current Company</h3>
                <h3>Stage</h3>
                <h3>Probability</h3>
            </Span>
            <Container>
            {prospectsToDisplay.map(prospect => 
            <ProspectCard key={prospect.id} prospect={prospect} companies={companies}/>
                )}
                </Container>
                </div>}
                </div>
}
        </Page>
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

const Page = styled.div`

align-items: center;
justify-content: center;
`;

const Span = styled.span`
margin-left: 11vw;
display: grid;
grid-template-columns: 15vw 15vw 20vw 15vw 15vw;
color: grey;
`;


const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
//   margin-top: 10vh;
//   margin-bottom: 20vh;
  max-height: 80vh;
  background-color: #FFFFFF;
  border-radius: 10px;
  overflow-y: auto;
  position: relative;
  box-shadow: 0px 0px 5px 0px #DBDBDB;
  &::-webkit-scrollbar {
      width: 10px;
  }
`;

export default ProspectsPage