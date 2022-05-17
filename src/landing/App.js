import * as React from 'react';
import Container from '@mui/material/Container';


import './App.css';
import Footer from './component/Footer'
import GreenToEarn from './component/GreenToEarn'
import Hero from './component/Hero'
import Nav from './component/Nav'
import Partner from './component/Partner';
import Roadmap from './component/Roadmap';
import SmallCards from './component/SmallCards'
import Team from './component/Team'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Container maxWidth='lg'>
        <Hero />
        <GreenToEarn />
        <SmallCards />
        <Team />
        <Partner />
        <Roadmap />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
