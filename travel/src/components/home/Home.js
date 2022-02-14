import React from 'react';
import Header from '../header/Header';
// import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
// import Data from "../../data/db.json";
import Navbar from '../Navbar/Navbar'

function Home() {

  return (
    <main>
    <Header />
    <Navbar/>

    <Tours />
  </main>
  );
}
export default Home;