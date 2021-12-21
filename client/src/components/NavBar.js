import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
    return(
        <div>
            <Container>
            <NavButton as={Link} to={`/prospectspage`}>
                Prospects
            </NavButton>

            <NavButton as={Link} to={`/companiespage`}>
                Companies
            </NavButton>

            <HomeButton as={Link} to={`/`}>
                CRM Sales Funnel
            </HomeButton>
            </Container>
        </div>
    )
}

const Container = styled.header`
//   display: flex;
//   position: relative;
  // justify-content: center;
  // align-items: center;
  padding: 2vh;
  height: 10vh;
  min-height: 50px;
  width: 100%;
  border-bottom: 4px solid grey;
  background-color: rgb(37, 38, 51);
`;

const HomeButton = styled.button`
float: left;
margin-top: 1%;
margin-left: 1%;
width: 25vw;
height: 10vh;
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
font-size: 5vh;

  &:hover {
    width: 30vw;
    // border: 3px solid #7F7F7F;
    background: transparent;
    color: #7F7F7F;
    cursor: pointer;
  }
`;

const NavButton = styled.button`
float: right;
margin-top: 1%;
margin-left: 1%;
margin-right: 5vw;
width: 20vw;
height: 10vh;
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
font-size: 5vh;

  &:hover {
    width: 30vw;
    // border: 3px solid #7F7F7F;
    background: transparent;
    color: #7F7F7F;
    cursor: pointer;
  }
`;


export default NavBar;