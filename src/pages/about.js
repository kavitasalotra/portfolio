import React from 'react';
import Layout from '../components/Layout';
import About from '../components/home/About';
import FeaturedItem from '../components/home/FeaturedItem';

const about = () => {
  return (
    <Layout>
      <About />
      <FeaturedItem />
    </Layout>
  );
};

export default about;
