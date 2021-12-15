import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
   } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProspectsPage from "./components/ProspectsPage"
import CompaniesPage from "./components/CompaniesPage"
import ProspectDetails from "./components/ProspectDetails"

function App() {
  const [prospects, setProspects] = useState([])
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(false)
  const [addingProspect, setAddingProspect] = useState(false)
  const [addingCompany, setAddingCompany] = useState(false)
  // const [selectedProspect, setSelectedProspect] = useState({})

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/prospects").then((r) => {
      if (r.ok) {
        r.json().then((prospects) => setProspects(prospects));
        setLoading(false)
      }
    });
    fetch("http://localhost:3000/companies").then((r) => {
      if (r.ok) {
        r.json().then((companies) => setCompanies(companies));
      }
    });
  }, []);

  const existingCompanies = companies.filter(company => company.name !== null)

  return (
    <div>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/prospects" element={  <ProspectsPage
              prospects={prospects}
              loading={loading}
              companies={existingCompanies}
              addingProspect={addingProspect}
              setAddingProspect={setAddingProspect}
              addingCompany={addingCompany}
              setAddingCompany={setAddingCompany}
/>}/>

            <Route path="/prospects/:id" element={  <ProspectDetails
              prospects={prospects}
              companies={companies}
              setAddingCompany={setAddingCompany}
            />}/>
          

            <Route path="/companies" element={  <CompaniesPage
              companies={existingCompanies}
              addingCompany={addingCompany}
              setAddingCompany={setAddingCompany}
            />}/>
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
