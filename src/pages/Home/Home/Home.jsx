import React from 'react';
import Navbar2 from '../Navber/Navbar2';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Banner2 from '../Banner/Banner2';
import ProCard from '../ProductCard/ProCard';
import Product from '../Products/Product';
import VerticalCarousel from '../Carousel/VerticalCarousel';
import Review from '../Review/Review';
import Brand from '../Brand/Brand';
import EmailSubmit from '../EmailSubmit/EmailSubmit';

const Home = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <Banner></Banner>
            <Card></Card>
            <Banner2></Banner2>
            <ProCard></ProCard>
            <Product></Product>
            {/* <VerticalCarousel></VerticalCarousel> */}
            <Review></Review>
            <Brand></Brand>
            <EmailSubmit></EmailSubmit>
        </div>
    );
};

export default Home;