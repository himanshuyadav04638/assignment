import React from 'react';
import './stylesheet/App.css';
import { Home } from './components/Home';
import { Addemployee } from './components/Addemployee';
import { Editemployee } from './components/Editemployee';
import { Routes, Route} from "react-router-dom";



import { GlobalProvider } from './context/GlobalState';


const  App = () => {
  return (
    <GlobalProvider>
     
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact  path="/add" element={<Addemployee />}/>
       <Route exact path="/edit/:id"  element={<Editemployee />}  />
       </Routes>
  
    </GlobalProvider>
  );
}

export default App;
