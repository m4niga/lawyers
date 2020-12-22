import React, {useState, useEffect } from 'react';
import BackToTop from './components/BackToTop/BackToTop';
import Dropdown from './components/Dropdown/Dropdown';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { InfoObjetivo, InfoPlan, InfoServicios, InfoSocios } from './utils/data/InfoData';
import { SliderData } from './utils/data/SliderData';
import { Footer } from './components/Footer/Footer'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }
  
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <GlobalStyle />
     <Navbar 
      scrollY={scrollY}
      toggle={toggle}
     />
     <Dropdown 
     isOpen={isOpen}
     toggle={toggle}
     />
     <Hero slides={SliderData}/>
     <InfoSection {...InfoObjetivo}/>
     <InfoSection {...InfoServicios} />
     <InfoSection {...InfoSocios} />
     <InfoSection {...InfoPlan} />
     <BackToTop scrollY={scrollY}/>
     <Footer />
    </div>
  );
}

export default App;
