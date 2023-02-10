import React from 'react';
import Layout from '../components/Layout';
// import HomeHero from '../components/home/HomeHero';
import styled from 'styled-components';
import GalleryItem from '../components/home/GalleryItem';

import dynamic from 'next/dynamic';
const CategoryImages = dynamic(
  () => import('../components/tabMenu/CategoryImages'),
  {
    ssr: false,
  },
);

const HomeHero = dynamic(() => import('../components/home/HomeHero'), {
  ssr: false,
});
const Wrapper = styled.div`
  background-image: url('/images/Home-hero-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const index = () => {
  return (
    <Layout>
      <Wrapper className="h-screen animate-in slide-in-from-right-96">
        <HomeHero />
      </Wrapper>
      <CategoryImages />
      <GalleryItem />
    </Layout>
  );
};

export default index;
