import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hospital from './pages/hospital';
import Office from './pages/office';
import Mall from './pages/mall';
import MallAD from "./pages/mallAD.js";
import OfficeAD from './pages/officeAD';
import HospitalAD from './pages/hospitalAD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/hospital" element={<Hospital/>}/>
      <Route path="/office" element={<Office/>}/>
      <Route path="/mall" element={<Mall/>}/>
      <Route path="/mall/anomalydm" element={<MallAD />}/>
      <Route path="/office/anomalydm" element={<OfficeAD />} />
      <Route path="/hospital/anomalydm" element={<HospitalAD/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
