import React,{forwardRef, useState} from 'react';
import { Title } from './Title';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


import { containerMotion, cardVariantMotion } from "../AppearOnScroll";

const eMail = "mossarellastudio@gmail.com";

const Contact = forwardRef((props,ref)=>{

  const { ref1, ref2,ref3 } = ref;

  console.log(ref)

  const [showToolTip, setShowToolTip] = useState(false);

  function HandleShowToolTip(){
    setShowToolTip(true);
  }

  function CopyToClipboard(){


    
       // Copy the text inside the text field
      navigator.clipboard.writeText(eMail);
    
      // Alert the copied text
      console.log("Copied the text: " + eMail);
      HandleShowToolTip();
  }


  return (
      <section className="contact fontColor" id='contact' ref={ref1}>
  
      <div className='maxPad bigPad '>
      <motion.div
            variants={containerMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.5 }}
          >
          <motion.div variants={cardVariantMotion}>
      <Title ref={ref2} titleText={"Get in touch."} align="center" />
      {/*
      <h3>
      
      Check out the contact below 
      </h3>
      */}
      </motion.div>
      <motion.div variants={cardVariantMotion}>
      <h2>
      
      Whether you have a question 
      <br/>
      or just want to say hi,
      <br/>
      Check out the contact below 
      <br/>
      </h2>

      <h3>
      
      I’ll try my best to get back to you!
      </h3>
      </motion.div>
      <motion.div variants={cardVariantMotion}>
      <div className='contactButtonDiv'>
      
      <button className='btn-normal' ref={ref3}>
      <a href="mailto:mossarellastudio@gmail.com" rel="noopener noreferrer" target={"_blank"}>Say hello</a>
      </button>
      
      </div>
      
      
      
      <div className='eMail'>
      <p >
      <span onClick={CopyToClipboard} className='pushable color1 clickableLink'>
      {eMail}
      </span>
      <br/>
      <span>
      +66 92 659 4825  
      </span>
      </p>

      <AnimatePresence initial={false} mode={"wait"} >
      {showToolTip&&<motion.div  exit={{scale:"100%",opacity:"0%",x:"250%"}}
      initial={{scale:"0%",opacity:"0%",x:"250%"}}
      animate={{scale:"100%",opacity:"100%",x:"250%"}}
      transition={{
          
          ease:[0,1,0,1],
          duration:1}} key={"toolTip"}   onAnimationComplete={() => {
            setShowToolTip(false);
          }} className='toolTip'>Copied!</motion.div>}
      
      </AnimatePresence>
  
      
   

      </div>
      </motion.div>
      </motion.div>
      </div>
      </section>);


      
});

export {Contact};