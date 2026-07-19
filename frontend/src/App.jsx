import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import FeatureStrip from './components/FeatureStrip';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-body">
      <Header />
      <main>
        <Home />
        <FeatureStrip />
        <Services />
        <Work />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
