import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import Data from "../../data/db.json";

function Home() {

  return (
    <main>
      {/* <Header /> */}
      <Header />

      <Tours data={Data}/>

      <Footer />
    </main>
  );
}
export default Home;