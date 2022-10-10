import React, { useState,useEffect, useRef } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Desc } from "./Desc";
import { Contact } from "./Contact";

import { Footer } from "./Footer";

function App() {

  
  let lastScroll=0;
  const currentScroll = useRef(lastScroll)
  const body=document.body;


  useEffect(() => {
    

   
    
    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event) => {



    
    currentScroll.current=window.scrollY;


    if(currentScroll.current<=0){
      body.classList.remove("scroll-up");
      console.log("condition1");

    }
    if(currentScroll.current>lastScroll&&!body.classList.contains("scroll-down")){
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
      console.log("condition2");

    }
    if(currentScroll.current< lastScroll&&body.classList.contains("scroll-down")){
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
      console.log("condition3");
    }

    lastScroll=currentScroll.current;
  };


  return (
    <div className="App">
    <Header />
    
    <About />
    <Desc/>
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

export default App ;
