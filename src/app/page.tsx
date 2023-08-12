import React from 'react';
import '../App.css';
import Nav from '@components/NavBar';
import Header from '@components/Header';
import About from '@components/About';
import Experiences from '@components/Experiences';
import Projects from '@components/Projects';
import Contact from '@components/Contact';

export default async function Home() {  
  const color = "purple";

  return (
    <>
      <Nav />
      <Header color={color} />
      <About color={color} />
      <Experiences color={color} />
      <Projects color={color} />
      <Contact color={color} />
    </>
  )
}