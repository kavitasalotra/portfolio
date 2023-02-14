import React from 'react';
import Layout from '../components/global/Layout';
import About from '../components/home/About';

import Teams from '../components/home/Teams';
import Features from '../components/home/Features';
import GalleryItem from '../components/home/GalleryItem';
import Services from '../components/home/Services';

const about = () => {
  return (
    <Layout>
      <About />
      <Services />
      <Features />
      <Teams />
      <GalleryItem />
    </Layout>
  );
};

export default about;
