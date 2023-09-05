import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Company from "../components/Company/Company";
import Testimonial from "../components/Testimonial/Testimonial";
import Subscription from "../components/Subscription/Subscription";
import Memories from "../Memories/Memories";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Memories />
      <Subscription />
      <Testimonial />
      <Company />
      <Footer />
    </div>
  );
};

export default Home;
