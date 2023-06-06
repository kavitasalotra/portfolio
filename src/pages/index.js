import React from 'react';
import Layout from '../components/global/Layout';
import Services from '../components/home/Services';

import dynamic from 'next/dynamic';

import Teams from '../components/home/Teams';

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
    <Layout isFixed>
      <HomeSlider />
      <CategoryImages />
      <Services />
      <Teams />
     
    </Layout>
  );
};

export default index;
