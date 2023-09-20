import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import DetailHotel from '../../components/detailHotel/DetailHotel';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

const Detail = () => {
  return (
    <div>
      <NavBar />
      <DetailHotel />
      <Mail />
      <Footer />
    </div>
  );
};

export default Detail;
