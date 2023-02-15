import React from 'react';
import {Header, About, Projects, Contact, Footer} from './containers';
import {Navbar} from './componets';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='top__section'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App