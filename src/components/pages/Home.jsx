import { React, useEffect, useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import axios from 'axios'

function Home () {

  // useEffect(()=>{
  //   const x = async ()=>{
  //     const res = await axios.get("/")
  //     console.log(res)
  //   }
  //   x()
  // },[])
    return (
      <>
        <HeroSection />
        <Cards />
        <Footer />
      </>
    )
}

export default Home;