
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Freedie from './pages/Freedie/Freedie';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import { HashRouter, Routes, Route, } from "react-router-dom";
// import {ReactLenis} from '@studio-freight/react-lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import ScrollToTop from './utils/ScrollToTop';
// // import { useThemeContext } from './utils/ThemeContextProvider';
// import { useEffect} from 'react';
// import { useEffect, useRef } from 'react';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

 

const App = () => {
  // const {isActive, removeClass} = useThemeContext();
  

  // useEffect(()=>{
  //   removeClass()
  //   if(isActive){
  //     document.documentElement.classList.remove('active')
  //     document.body.classList.remove('active')
  //   }
  // },[])

  const [key, setKey] = useState(0);

  // Generate a unique key on load
  useEffect(() => {
    setKey(Date.now());
  }, []);



  return (
    <HashRouter>
      {/* <ReactLenis root> */}
      <ScrollToTop />
        <div className="main" >
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/fredibuddies" element={<Freedie />} />
            <Route path="/about" element={<Portfolio key={key.toString()} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          
        </div>
        {/* </ReactLenis> */}
    </HashRouter>
  );
};

export default App;
