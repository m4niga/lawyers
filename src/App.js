import React, {useState} from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './utils/data/SliderData';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <GlobalStyle />
     <Navbar 
      toggle={toggle}
     />
     <Dropdown 
     isOpen={isOpen}
     toggle={toggle}
     />
     <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
