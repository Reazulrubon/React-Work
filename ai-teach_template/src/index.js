import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeadFoot from './Components/Includes/HeadFoot';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeadFoot />}>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="*" element={<NoPage/>}></Route>


      </Route>

    </Routes>




  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
