import React from 'react';
import Layout from '../components/global/Layout';
import Services from '../components/home/Services';

import dynamic from 'next/dynamic';

import Teams from '../components/home/Teams';
import CallToAction from '../components/home/CallToAction';

const CategoryImages = dynamic(
  () => import('../components/tabMenu/CategoryImages'),
  {
    ssr: false,
  },
);

const HomeSlider = dynamic(() => import('../components/home/HomeSlider'), {
  ssr: false,
});

const index = () => {
  return (
    <Layout>
      <HomeSlider />
      <CategoryImages />

      <Services />
      <Teams />
      <CallToAction />
    </Layout>
  );
};

export default index;
