import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Tours from '../../components/tours';
import Data from "../data/db";

function Home() {

  return (
    <main>
      <Header />

      <Tours data={Data}/>

      <Footer />
    </main>
  );
}
export default Home;