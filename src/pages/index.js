import React from 'react';
import Layout from '../components/global/Layout';
// import HomeHero from '../components/home/HomeHero';
import styled from 'styled-components';
import GalleryItem from '../components/home/GalleryItem';
import dynamic from 'next/dynamic';
// import BackgroundSlider from 'react-background-slider';
import Teams from '../components/home/Teams';
// import HomeSlider from '../components/HomeSlider';

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
      {/* <BackgroundSlider
        images={[slider1, slider2]}
        duration={15}
        transition={2}
      /> */}
      <Wrapper className="h-screen animate-in slide-in-from-right-96">
        <HomeHero />
      </Wrapper>
      <CategoryImages />
      <GalleryItem />
      <Teams />
    </Layout>
  );
};

export default index;
