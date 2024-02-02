import React from 'react';

//react router dom
import { BrowserRouter as router, Route, Routes, Router } from 'react-router-dom';

//  Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'

// components
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/product/:id' element=
        {<ProductDetails/> } />

      </Routes>
      <Footer/>
    </Router>
  </div>;
};

export default App;
