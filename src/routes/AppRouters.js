import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frases from '../components/Frases';


const AppRouters = () => {
  return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Frases />} />
        </Routes>
      </BrowserRouter>
  ) 
};

export default AppRouters;
