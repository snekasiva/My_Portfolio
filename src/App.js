import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Project from './Components/Project';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>      
    </BrowserRouter>
    </>
  );
}

export default App;
