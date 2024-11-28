'use client';
import Nav from './ui/Nav';
import Header from './ui/home/Header';
import Cards from './ui/home/Cards/Cards';
import Steps from './ui/home/Steps/Steps';
import About from './ui/home/About/About';
import Portfolio from './ui/home/Portfolio/Portfolio';
import Testimonials from './ui/home/Testimonials/Testimonials';
import Collabs from './ui/home/Collabs/Collabs';
import Contacts from './ui/home/Contacts/Contacts';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <Cards />
      <Steps />
      <About />
      <Portfolio />
      <Testimonials />
      <Collabs />
      <Contacts />
      <Footer />
    </main>
  );
}
