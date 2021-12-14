import React from "react";

function CompanyCard({company}) {
    return(
        <div>
            <h1>Company: {company.name}</h1>
        </div>
    )
}

export default CompanyCard;