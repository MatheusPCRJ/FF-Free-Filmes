import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import Home from './pag/home.jsx';
import Filmes from './pag/filmes.jsx';
import Series from './pag/series.jsx';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="filmes" element={<Filmes />}/>
          <Route path="series" element={<Series />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
