import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Awards from './components/Awards';
import Recommendations from './components/Recommendations';
import Email from './components/Email';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Work />
      <Education />
      <Certifications />
      <Skills />
      <Languages />
      <Awards />
      <Recommendations />
      <Email />
      <Form />
      <Footer />
    </div>
  )
}

export default App