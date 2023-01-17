import React from 'react';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
// import styled from 'styled-components';
import GalleryItem from '../components/home/GalleryItem';

// const Wrapper = styled.div`
//   position: relative;

//   .background-image {
//     z-index: 0;
//   }
//   .hero-wrapper {
//     position: relative;
//     z-index: 1;
//   }
// `;

const index = () => {
  return (
    <Layout>
      <HomeHero />
      <GalleryItem />
    </Layout>
  );
};

export default index;
