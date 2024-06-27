import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Destination from './pages/Destination';
import About from './pages/About';
import Hotel from './pages/Hotel';
import Signin from './pages/Signin';

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='destination' element={<Destination />} />
            <Route path='about' element={<About />} />
            <Route path='hotel' element={<Hotel />} />
            <Route path='signin' element={<Signin />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
