import React from "react";
import ProspectCard from "./ProspectCard"
import styled from "styled-components";

function ProspectsPage({prospects}) {
    return(
        <div>
            <Span>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Current Company</h3>
                <h3>Stage</h3>
                <h3>Probability</h3>
            </Span>
            <Container>
            {prospects.map(prospect => 
            <ProspectCard prospect={prospect}/>
                )}
                </Container>
        </div>
    )
}

// const Container = styled.div`

//   margin-top: 50px;
//   margin-bottom: 30px;
//   display: grid;
//   grid-template-columns: 20vw 20vw 20vw 20vw 20vw;

// `;

const Span = styled.span`
margin-left: 11vw;
display: grid;
grid-template-columns: 15vw 15vw 20vw 15vw 15vw;
`;


const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
//   margin-top: 10vh;
  margin-bottom: 20vh;
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