import React from "react";

function ProspectCard({prospect}) {
    // console.log(prospect.company)
    return(
        <div>
            <h1>Name: {prospect.first_name} {prospect.last_name}</h1>
            <h1>{prospect.company.name === null ? "No Company" : `Company: ${prospect.company.name}`}</h1>
        </div>
    )
}

export default ProspectCard