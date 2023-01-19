import React from 'react';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import styled from 'styled-components';
import GalleryItem from '../components/home/GalleryItem';
import CategoryImages from '../components/tabMenu/CategoryImages';

const Wrapper = styled.div`
  background-image: url('/images/Homehero.jpg.webp');
  background-repeat: no-repeat;
  background-size: cover;
`;

const index = () => {
  return (
    <Layout>
      <Wrapper>
        <HomeHero />
      </Wrapper>
      <CategoryImages />
      <GalleryItem />
    </Layout>
  );
};

export default index;
