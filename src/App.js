import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './utils/data/SliderData';


function App() {
  return (
    <div>
      <GlobalStyle />
     <Navbar />
     <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
