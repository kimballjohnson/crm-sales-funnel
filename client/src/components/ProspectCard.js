import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProspectCard({prospect, companies}) {

    const src = `/prospects/${prospect.id}`;

    const [expand, setExpand] = useState(false)

    return(
        <div>
            <Card onClick={() => setExpand(!expand)}>
            
            <Span>
                <p>{prospect.first_name}</p>
                <p>{prospect.last_name}</p>
                <p>{prospect.company.name === null ? "None" : prospect.company.name}</p>
                <p>{prospect.stage}</p>
                <p>{prospect.probability}%</p>
            </Span>
            {!expand ? null : 
            <div>
            <Button as={Link} to={src}>View this Prospect</Button>
            </div>}
            </Card>
        </div>
    )
}

// const Card = styled.div`
// margin-top: 10px;
// margin-bottom: 10px;
// margin-right: 10px;
// margin-left: 10px
// height: 20vw;
// width: 15vw;
// display: flex;
// flex-direction: column;
// justify-content: center; 
// align-items: center;
// text-align: center;
// border: 2px solid grey;
// background-color: rgb(50, 50, 50);
// border-radius: 15px;
// &:hover {
//   box-shadow: 0px 0px 15px 0px #848484;
//   cursor: pointer
// }
// `;

const Card = styled.div`
border-bottom: 1px solid #E3E3E3;
width: 100%;
&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
  cursor: pointer
}
`;

const Span = styled.span`
margin-left: 3vw;
display: grid;
grid-template-columns: 15vw 15vw 17vw 18vw 15vw;
`;


const Button = styled.button`
margin-bottom: 1vh;
`;

// const Down = styled.text`
// transform: rotate(-90deg)
// `;

// const Up = styled.text`
// transform: rotate(90deg)
// `;

export default ProspectCard