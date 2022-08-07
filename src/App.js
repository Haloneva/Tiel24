import React from 'react';
import Navbar from './Navbar.js';


import { Helmet } from 'react-helmet';


import {Route, Routes} from 'react-router-dom'
import FAQ from "./pages/FAQ/FAQ"

import Team from "./pages/Team"
import Home from "./pages/Home"
import FAQVS from './pages/FAQ/FAQVS.jsx';
import FAQGS from './pages/FAQ/FAQGS.jsx';
import FAQIS from './pages/FAQ/FAQIS.jsx';
import Gameserver from './products/Gameserver.jsx';
import Instanzserver from './products/Instanzserver.jsx';
import VServer from './products/vServer.jsx';
import Impressum from './rechtliches zeug/Impressum'
import Datenschutz from './rechtliches zeug/Datenschutz.jsx';
import Nutzungsbedingungen from './rechtliches zeug/Nutzungsbedingungen';

function App(){
    return(
       <>
      
        

       
        <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Tiel24.de | Home</title>
        <meta name="description" content="Tiel24.de Der kostenloser Hoster für deine Projekte! " />
      </Helmet>
      </div>
        <Navbar />
        
          <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/" element={<Home />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/faq/vserver" element={<FAQVS />} />
            <Route path="/faq/gameserver" element={<FAQGS />} />
            <Route path="/faq/instanz" element={<FAQIS />} />
            <Route path="/produkte/gameserver" element={<Gameserver />} />
            <Route path="/produkte/instanzserver" element={<Instanzserver />} />
            <Route path="/produkte/vserver" element={<VServer />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/nutzungsbedingungen" element={<Nutzungsbedingungen />} />
           
            </Routes>  
           
          
            </> 
        
       
    );
}

export default App;