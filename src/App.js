import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar"
import Landing from "./scenes/Landing"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact";
import About from "./scenes/About";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [topOfPage, setTopOfPage] = useState(true);

  const mdMediaQueryCheck = useMediaQuery("(min-width: 1060px)");
  const smMediaQueryCheck = useMediaQuery("(min-width: 768px)");
  const xsMediaQueryCheck = useMediaQuery("(min-width: 480px)");

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setTopOfPage(true);
      else                     setTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

/*
topOfPage = {topOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}  
*/

  return (
    <>
    <Navbar/>
    <div className="app bg-dark-purple w-5/6 mx-auto md:h-full">
      
      <Landing/>
      <Projects/>
      <Contact/>
      <About/>

    </div>
    </>
  );
}

export default App;
