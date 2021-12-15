import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
    return(
        <div>
            <NavButton as={Link} to={`/prospects`}>
                Prospects
            </NavButton>

            <NavButton as={Link} to={`/companies`}>
                Companies
            </NavButton>
        </div>
    )
}

const NavButton = styled.button`
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


export default NavBar;