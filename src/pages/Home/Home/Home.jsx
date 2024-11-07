import React from "react";
import Navbar2 from "../Navber/Navbar2";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Banner2 from "../Banner/Banner2";
import ProCard from "../ProductCard/ProCard";
import Product from "../Products/Product";
import Review from "../Review/Review";
import Brand from "../Brand/Brand";
import EmailSubmit from "../EmailSubmit/EmailSubmit";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Home</title>
      </Helmet>

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
