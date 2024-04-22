import React from 'react';
import Navbar from './Navbar';
import Principal from './Principal';
import Aside from './Aside';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <div className="main-container">
        <Aside />
        <Principal />
      </div>

      <Footer />
    </div>
  );
};

export default App;
