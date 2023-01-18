import React from 'react';
import Layout from '../components/Layout';
import About from '../components/home/About';

import Teams from '../components/home/Teams';
import Features from '../components/home/Features';

const about = () => {
  return (
    <Layout>
      <About />
      <Features />
      <Teams />
    </Layout>
  );
};

export default about;
