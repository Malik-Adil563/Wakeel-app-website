/* eslint-disable quotes */
import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutWakeel from '../Components/AboutWakeel';
import ConnectWithUs from '../Components/ConnectWithUs';
import Feature from '../Components/Feature';
import OnlineDealings from '../Components/OnlineDealings';
import Services from '../Components/Services';

function Home() {
  return (
    <div>
      {/* Hero Section Here */}
      <HeroSection />

      {/* About Wakeel Section Here */}
      <AboutWakeel />

      {/* Features Section */}
      <Feature />

      {/* Services of Wakeel */}
      <Services />

      {/* Online Dealings */}
      <OnlineDealings />

      {/* Connect with Wakeel */}
      <ConnectWithUs />
    </div>
  );
}

export default Home;
