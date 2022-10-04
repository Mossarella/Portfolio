import React, { useState,useEffect } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

import { Footer } from "./Footer";

function App() {

  let lastScroll=0;
  const body=document.body;
  useEffect(() => {
    

    const handleScroll = event => {



    
      const currentScroll=window.scrollY;


      if(currentScroll<=0){
        body.classList.remove("scroll-up");
        console.log("condition1");

      }
      if(currentScroll>lastScroll&&!body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
        console.log("condition2");

      }
      if(currentScroll< lastScroll&&body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
        console.log("condition3");

      }
      lastScroll=currentScroll;


    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  


  return (
    <div className="App">
    <Header />
    
    <About />
    <Home />
    <Contact />
    <Footer />
      {/*
      <Work />
      <Skill />
      <Extra />
      */} 
    </div>
  );
}

export { App };
