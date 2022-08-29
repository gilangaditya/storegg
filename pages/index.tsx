/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/atoms/organisems/Navbar';
import MainBanner from '../components/atoms/organisems/MainBanner';
import TransactionStep from '../components/atoms/organisems/TransactionStep';
import FeaturedGame from '../components/atoms/organisems/FeaturedGame';
import Reached from '../components/atoms/organisems/Reached';
import Story from '../components/atoms/organisems/Story';
import Footer from '../components/atoms/organisems/Footer';

const Home: NextPage = function () {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      />

      <script>
        AOS.init();
      </script>
    </>
  );
};

export default Home;
