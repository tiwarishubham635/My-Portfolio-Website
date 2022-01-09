import './App.css';
import Hero from './Hero';
import Header from './Header';
import Main from './Main';
import About from './About'
import Skill from './Skill'
import Project from './Project'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
        <Header/>
        <Hero/>
        <Main/>
        <Footer/>
        <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
        {/* <Routes>
            <Route exact path="/" element={<Hero/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/skills" element={<Skill/>}/>
            <Route  path="/projects" element={<Project/>}/>
        </Routes> */}
    </div>
  );
}

export default App;
