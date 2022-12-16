//Fonction principale contenant toute la logique de fonctionnement du site

//Import des "library" de fonctionnement
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import des pages de l'application
import { PageHome } from "";
import { PagePriseDeCourant16A } from "";
import { PageCircuitSpecialise } from "";
import { PageCircuitEclairage } from "";
import { PageDisjoncteurdeBranchement } from "";
import { PageDispositifDifferentiel } from "";
import { PageTableauDeCommunication } from "";
import { PageTableauDeRepartition } from "";
import { PageContact } from "";
import { PageMentionLegale } from "";
import { TrucsEtAstuces } from "";
import { PageErreur404 } from "";

//Import des composants enfants
import { Header } from "";
import { Footer } from "";


//Import des feuilles de style
import './App.css';

function App() {
  return (
    <Router>
      
      <Header />

      <Routes>
        
        <Route exact path="/" element={<PageHome />}> </Route>
        <Route exact path="/pc16a" element={<PagePriseDeCourant16A />}> </Route>
        <Route exact path="/circuit-specialise" element={<PageCircuitSpecialise />}> </Route>
        <Route exact path="/circuit-eclairage" element={<PageCircuitEclairage />}> </Route>
        <Route exact path="/db" element={<PageDisjoncteurdeBranchement />}> </Route>
        <Route exact path="/ddr" element={<PageDispositifDifferentiel />}> </Route>
        <Route exact path="/tc" element={<PageTableauDeCommunication />}> </Route>
        <Route exact path="/tgbt" element={<PageTableauDeRepartition />}> </Route>
        <Route exact path="/contact" element={<PageContact />}> </Route>
        <Route exact path="/mention-legale" element={<PageMentionLegale />}> </Route>
        <Route exact path="/truc-astuce" element={<TrucsEtAstuces />}> </Route>
        <Route path="/*" element={<PageErreur404 />}> </Route>
        

      </Routes>

      <Footer />

    </Router>  
    
  );
}

export default App;