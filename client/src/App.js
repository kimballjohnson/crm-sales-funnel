import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  useRoutes, } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProspectsPage from "./components/ProspectsPage"
import CompaniesPage from "./components/CompaniesPage"

function App() {
  const [prospects, setProspects] = useState([])
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/prospects").then((r) => {
      if (r.ok) {
        r.json().then((prospects) => setProspects(prospects));
      }
    });
    fetch("http://localhost:3000/companies").then((r) => {
      if (r.ok) {
        r.json().then((companies) => setCompanies(companies));
      }
    });
  }, []);


  return (
    <div>
      <Router>
      <NavBar />
<Routes>
      <Route path="/prospects" element={  <ProspectsPage
              prospects={prospects}
            />}/>
          

      <Route path="/companies" element={  <CompaniesPage
              companies={companies}
            />}/>
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
