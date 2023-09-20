import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyTypeHotels from '../../components/propertyTypeHotel/PropertyTypeHotels';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Featured />
      <PropertyTypeHotels />
      <FeaturedProperty />
      <Mail />
      <Footer />
    </div>
  );
};

export default Home;
