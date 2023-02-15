import React from 'react';
import Layout from '../components/global/Layout';
// import HomeHero from '../components/home/HomeHero';
// import styled from 'styled-components';
import GalleryItem from '../components/home/GalleryItem';
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
// const Wrapper = styled.div`
//   background-image: url('/images/Home-hero-image.jpg');
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

const index = () => {
  return (
    <Layout>
      <HomeSlider />
      <CategoryImages />
      <GalleryItem />
      <Teams />
    </Layout>
  );
};

export default index;
