import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Testes from './components/pages/Testes'

import Container from './components/layout/Container/Container'
import NavBar from './components/layout/NavBar/NavBar'

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
      <p>Footer</p>
    </Router> 
  );
}

export default App;
