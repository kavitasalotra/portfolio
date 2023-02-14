import React from 'react';
import ContactUs from '../components/home/ContactUs';
import GalleryItem from '../components/home/GalleryItem';
import Layout from '../components/global/Layout';

const contact = () => {
  return (
    <Layout>
      <ContactUs />
      <GalleryItem />
    </Layout>
  );
};

export default contact;
