//Fonction principale contenant toute la logique de fonctionnement du site

//Import des "library" de fonctionnement
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import des differents "context"
import { NavContextProvider } from "./Utils/context/Nav_context.jsx";

//Import des pages de l'application
import { PageHome } from "../src/Pages/Home/PageHome.jsx";
import { PagePC16A } from "../src/Pages/Prise_De_Courant_16A/Prise_De_Courant_16A";
import { PageCircuitSpecialise } from "../src/Pages/Circuit_Specialise/Circuit_Specialise.jsx";
import { PageCircuitEclairage } from "../src/Pages/Circuit_Eclairage/Circuit_Eclairage.jsx";
import { PageDisjoncteurMagnetoThermique } from "../src/Pages/DisjoncteurMagnetoThermique/DisjoncteurMagnetoThermique.jsx";
import { PageDisjoncteurDeBranchement } from "../src/Pages/Disjoncteur_De_Branchement/Disjoncteur_De_branchement.jsx";
import { PageDispositifDifferentiel } from "../src/Pages/Dispositif_Differentiel/Dispositif_Differentiel.jsx";
import { PageTableauDeCommunication } from "../src/Pages/Tableau_De_Communication/Tableau_De_Communication.jsx";
import { PageTGBT } from "./Pages/TGBT/TGBT.jsx";
import { PageContact } from "../src/Pages/Contact/Contact.jsx";
import { PageCGU } from "../src/Pages/CGU/CGU.jsx";
import { PageTrucEtAstuce } from "../src/Pages/Truc_Et_Astuce/Truc_Et_Astuce.jsx";
import { PageQuizPC } from "./Pages/QuizPC/PageQuizPC.jsx";
import { PageQuizCircuitSpecialise } from "./Pages/QuizCircuitSpecialise/PageQuizCircuitSpecialise.jsx";
import { PageErreur } from "../src/Pages/Erreur_404/Erreur_404.jsx";
import { PageTestServer } from "../src/Pages/Test_Server/TestServer.jsx";

//Import des composants enfants
import { Header } from "../src/Components/Header/Header.jsx";
import { Footer } from "../src/Components/Footer/Footer.jsx";



function App() {
  return (
    <Router>
      <NavContextProvider>
        <Header />

        <Routes>
          <Route exact path="/" element={<PageHome />}></Route>
          <Route path="testserver" element={<PageTestServer />}></Route>
          <Route path="/schema/pc16a" element={<PagePC16A />}></Route>
          <Route path="/schema/pc16a/quiz" element={<PageQuizPC />}></Route>
          <Route path="/schema/circuit-specialise" element={<PageCircuitSpecialise />}></Route>
          <Route path="/schema/circuit-specialise/quiz" element={<PageQuizCircuitSpecialise />}></Route>
          <Route path="/schema/circuit-eclairage"  element={<PageCircuitEclairage />}></Route>
          {<Route path="/schema/circuit-eclairage/quiz"  element={""}></Route>}
          <Route path="/db" element={<PageDisjoncteurDeBranchement />}></Route>
          <Route path="/ddr" element={<PageDispositifDifferentiel />}></Route>
          <Route path="/tc" element={<PageTableauDeCommunication />}></Route>
          <Route path="/tgbt" element={<PageTGBT />}></Route>
          <Route path="/contact/*" element={<PageContact />}></Route>
          <Route path="/cgu/*" element={<PageCGU />}></Route>
          <Route path="/truc-astuce" element={<PageTrucEtAstuce />}></Route>
          <Route path="/disjoncteur" element={<PageDisjoncteurMagnetoThermique />}></Route>
          <Route path="/*" element={<PageErreur />}></Route>
        </Routes>

        <Footer />
      </NavContextProvider>
    </Router>
  );
}

export { App };
