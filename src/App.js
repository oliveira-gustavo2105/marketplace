import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Testes from './components/pages/Testes'

import Container from './components/layout/Container/Container'
import NavBar from './components/layout/NavBar/NavBar'
import TopBar from "./components/layout/TopBar/TopBar";
import Footer from "./components/pages/Home/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/Testes" element={<Testes/>}/>    
          </Routes>
      </Container>
      <Footer />
    </Router> 
  );
}

export default App;
