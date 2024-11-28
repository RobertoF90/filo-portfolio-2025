'use client';
import Nav from '@/app/ui/home/Nav';
import Header from './ui/home/Header';
import Cards from './ui/home/Cards/Cards';
import Steps from './ui/home/Steps/Steps';
import About from './ui/home/About/About';
import Portfolio from './ui/home/Portfolio/Portfolio';

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Cards />
      <Steps />
      <About />
      <Portfolio />
    </div>
  );
}
