import React from 'react';
import Layout from '../components/Layout';
import About from '../components/home/About';

import Teams from '../components/home/Teams';
import Features from '../components/home/Features';
import GalleryItem from '../components/home/GalleryItem';

const about = () => {
  return (
    <Layout>
      <About />
      <Features />
      <Teams />
      <GalleryItem />
    </Layout>
  );
};

export default about;
