import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
   } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProspectsPage from "./components/ProspectsPage"
import CompaniesPage from "./components/CompaniesPage"
import ProspectDetails from "./components/ProspectDetails"
import CompanyDetails from "./components/CompanyDetails"
import HomePage from "./components/HomePage"

function App() {
  const [prospects, setProspects] = useState([])
  const [companies, setCompanies] = useState([])
  const [loadingProspects, setLoadingProspects] = useState(false)
  const [loadingCompanies, setLoadingCompanies] = useState(false)
  const [addingProspect, setAddingProspect] = useState(false)
  const [addingCompany, setAddingCompany] = useState(false)
  // const [selectedProspect, setSelectedProspect] = useState({})

  useEffect(() => {
    setLoadingProspects(true)
    fetch("/prospects").then((r) => {
      if (r.ok) {
        r.json().then((prospects) => setProspects(prospects));
        setLoadingProspects(false)
      }
    });
    setLoadingCompanies(true)
    fetch("/companies").then((r) => {
      if (r.ok) {
        r.json().then((companies) => setCompanies(companies));
        setLoadingCompanies(false)
      }
    });
  }, []);

  const existingCompanies = companies.filter(company => company.name !== null)

  return (
    <div>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={  <ProspectsPage
              prospects={prospects}
              loading={loadingProspects}
              companies={companies}
              addingProspect={addingProspect}
              setAddingProspect={setAddingProspect}
              addingCompany={addingCompany}
              setAddingCompany={setAddingCompany}
/>}/>

            <Route path="/:id" element={  <ProspectDetails
              prospects={prospects}
              companies={companies}
              setAddingCompany={setAddingCompany}
            />}/>
          

            <Route path="/companiespage" element={  <CompaniesPage
              companies={existingCompanies}
              addingCompany={addingCompany}
              setAddingCompany={setAddingCompany}
              loading={loadingCompanies}
            />}/>

            <Route path="/companiespage/:id" element={  <CompanyDetails
              prospects={prospects}
             setAddingProspect={setAddingProspect}
             loadingProspects={loadingProspects}
            />}/>

            {/* <Route path="/" element={  <HomePage
            
            />}/> */}
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
