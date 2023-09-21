import React, { useState,useEffect, useRef } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Desc } from "./Desc";
import { Contact } from "./Contact";

import { Work } from "./Work";
import { Skill } from "./Skill";
import { Extra } from "./Extra";


import { SideButton } from "./SideButton";

import { Footer } from "./Footer";
import { NavPopUp } from "./NavPopUp";
import { SideContact } from "./SideContact";
import {Marquee} from './Marquee'
import {Marquee2} from './Marquee2'
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion"




function App() {

  
  let lastScroll=0;
  const currentScroll = useRef(lastScroll)
  const clientHeight = useRef(document.documentElement.clientHeight);
  const workSection = useRef();
  const extraSection = useRef();
  const getToKnowButton=useRef();
  const descSection=useRef();
  const sideContactRef=useRef();
  const appSection=useRef();
  const contactSection=useRef();
  const contactTitleUnderline=useRef();
  const contactSectionButton=useRef();

  const body=document.body;

 
  const [disableLoader, setDisableLoader] = useState(false);
  useEffect(() => {
    
    
    
    body.classList.add("scroll-up");
    
    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event) => {


    
    
    

    
    currentScroll.current=window.scrollY;






    if(currentScroll.current<=0){
      body.classList.remove("scroll-up");
    

    }
    if(currentScroll.current>lastScroll&&!body.classList.contains("scroll-down")){
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
  

    }
    if(currentScroll.current< lastScroll&&body.classList.contains("scroll-down")){
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    
    }

    lastScroll=currentScroll.current;
//scrollNavbar

    const workSectionY=workSection.current.getBoundingClientRect().y+((workSection.current.getBoundingClientRect().height)*-0.025);
    const extraSectionTotal=extraSection.current.getBoundingClientRect().y+((extraSection.current.getBoundingClientRect().height)*5/10);
    

    if(workSectionY<=0&&extraSectionTotal>0){

      getToKnowButton.current.style.left="-45px";
    }
    else if(workSectionY>0||extraSectionTotal<=0){
      

      getToKnowButton.current.style.left="-100px";
      
    }


    const descSectionY=descSection.current.getBoundingClientRect().y+((descSection.current.getBoundingClientRect().height)*1/10);

    if(extraSectionTotal>0){
      sideContactRef.current.style.right="1em";
    }
    else if(extraSectionTotal<=0){
      
      sideContactRef.current.style.right="-3em";
      
    }
  
    

    //showhidebutton


    const contactSectionY=contactSection.current.getBoundingClientRect().y-((contactSection.current.getBoundingClientRect().height)*1.5/3);
    if(contactSectionY<=0){
      appSection.current.classList.add('revertApp');
      appSection.current.classList.remove("app");
      contactSection.current.classList.add("fontColorRevert");
      contactSection.current.classList.remove("fontColor");
      contactTitleUnderline.current.classList.add("underLineRevert");
      contactTitleUnderline.current.classList.remove("underLine");
      contactSectionButton.current.classList.add("revertBtn-normal");
      contactSectionButton.current.classList.remove("btn-normal");
    }
    else{
      appSection.current.classList.add('app');
      appSection.current.classList.remove("revertApp");
      contactSection.current.classList.add("fontColor");
      contactSection.current.classList.remove("fontColorRevert");
      contactTitleUnderline.current.classList.add("underLine");
      contactTitleUnderline.current.classList.remove("underLineRevert");
      contactSectionButton.current.classList.add("btn-normal");
      contactSectionButton.current.classList.remove("revertBtn-normal");

    }


  
  };

  
  function LogWelcome() {
    console.log(`
  ██   ██  ██████  ██     ██ ██████  ██    ██ ██                      
  ██   ██ ██    ██ ██     ██ ██   ██  ██  ██  ██                      
  ███████ ██    ██ ██  █  ██ ██   ██   ████   ██                      
  ██   ██ ██    ██ ██ ███ ██ ██   ██    ██                            
  ██   ██  ██████   ███ ███  ██████     ██    ██                      
                                                                      
                                                                      
  ███████ ████████ ██████   █████  ███    ██  ██████  ███████ ██████  
  ██         ██    ██   ██ ██   ██ ████   ██ ██       ██      ██   ██ 
  ███████    ██    ██████  ███████ ██ ██  ██ ██   ███ █████   ██████  
       ██    ██    ██   ██ ██   ██ ██  ██ ██ ██    ██ ██      ██   ██ 
  ███████    ██    ██   ██ ██   ██ ██   ████  ██████  ███████ ██   ██  
                                
                                                                          
  ########################################################  
  You found the hidden easter egg, Hooray!

  This website was designed and built by Noppheera B.
  I'm having way too much fun creating this !   
  ########################################################                                                                      
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
`);
}



  return (
    <div 
    
    
    
    className="app" ref={appSection}>


    {!disableLoader&&<motion.div exit={{opacity:"100%"}}
    initial={{opacity:"100%"}}
    animate={{opacity:"0%"}}
    transition={{duration:1}}
    key={"transition"}
    onAnimationComplete={() => {
      setDisableLoader(true);
      LogWelcome();
    }}
    className="transition loaderComponent"></motion.div>}
    



    <SideButton ref={getToKnowButton}/>
    <SideContact ref={sideContactRef}/>
 
    <Header />
    
    <About />
    <Desc ref={descSection}/>
    <Marquee2/>

    <Work ref={workSection}/>
    <Skill/>
    <Extra ref={extraSection}/>
    <Marquee/>

    <Contact ref={{ref1:contactSection,ref2:contactTitleUnderline,ref3:contactSectionButton}} />
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
