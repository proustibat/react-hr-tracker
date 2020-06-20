import React from 'react';
import HomeHero from './components/HomeHero/HomeHero';
import HomeContent from './components/HomeContent/HomeContent';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

const App = () => (
  <>
    <HomeHero />
    <HomeContent />
    <Footer />
  </>
);

export default App;
