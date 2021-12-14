import React from "react";
import ProspectCard from "./ProspectCard"

function ProspectsPage({prospects}) {
    return(
        <div>
            {prospects.map(prospect => 
            <ProspectCard prospect={prospect}/>
                )}
        </div>
    )
}

export default ProspectsPage