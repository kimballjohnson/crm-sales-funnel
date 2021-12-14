import React from "react";
import ProspectCard from "./ProspectCard"
import styled from "styled-components";

function ProspectsPage({prospects}) {
    return(
        <div>
            <Container>
            {prospects.map(prospect => 
            <ProspectCard prospect={prospect}/>
                )}
                </Container>
        </div>
    )
}

const Container = styled.div`

  margin-top: 50px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 20vw 20vw 20vw 20vw 20vw;

`;

export default ProspectsPage