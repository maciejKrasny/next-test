import React from 'react';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import ContinuousSlider from '../components/Sliders/Slider';
import LoremIpsum from '../components/Texts/LoremIpsum';
import Video from '../components/Video/Video';

const IndexPage = () => (
  <Layout title="Home | Next.js TypeScript Starter">
        <img src="https://i.picsum.photos/id/229/200/300.jpg?hmac=WD1_MXzGKrVpaJj2Utxv7FoijRJ6h4S4zrBj7wmsx1U"/>
    <LoremIpsum />
    <Posts />
    <Video />
    <img src="/images/city.png" />
    <ContinuousSlider />
    {/* <ImageFromDataUri /> */}
    
        <img src="https://i.picsum.photos/id/343/1920/1080.jpg?hmac=ENl4C0Dyd_-O9itbcw3QlisUiGXq5cbE_h5PeCKlbqY" />
  </Layout>
);

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default IndexPage;
