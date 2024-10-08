import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Contact';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';
import Specialdays from '../components/Specialdays';
import Subscription from '../components/Subscription';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            {/* <Particles /> */}
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Specialdays />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Subscription />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          {/* <Canvas /> */}
        </>
      </LazyShow>

      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
