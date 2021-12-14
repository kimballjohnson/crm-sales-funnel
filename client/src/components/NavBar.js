import React from "react";
import { Link, useHistory } from "react-router-dom";
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

export default NavBar;