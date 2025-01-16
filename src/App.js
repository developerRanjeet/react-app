import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main id='main'>
      <Header />
      <Home />
      <Services />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
