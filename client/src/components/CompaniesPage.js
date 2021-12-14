import React from "react";
import CompanyCard from "./CompanyCard"

function CompaniesPage({companies}) {

    const existingCompanies = companies.filter(company => company.name !== null)

    return(
        <div>
        {existingCompanies.map(company => 
        <CompanyCard company={company}/>
            )}
    </div>
    )
}

export default CompaniesPage