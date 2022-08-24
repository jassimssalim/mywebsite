import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Cert from "./components/Certificate";
import Contact from "./components/Contact";

function App() {
 return( 
  <div>
    <div>    <NavBar />  </div>
 
    <Home />
    <About/>
    <Skills/>
    <Cert/>
    <Contact />
   



    
    <SocialLinks/>

  </div>
  


 );
}

export default App;
