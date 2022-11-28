import React from 'react';
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {BsFillMouseFill} from "react-icons/bs";
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";


import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const banner = {

  animate: {
    transition: {
      // delay:10,
      delayChildren: 2.6,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimate = {
  initial: { 
    opacity: 0,
    y: 1000 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
const appear = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay:4.8,
      duration: 1.2,
    },
  },
};


function About(){
  return (
      <section className="about classMargin" id='about'>
  
    <motion.div className='pad maxPad'
    
    variants={banner}  
    initial='initial'
    animate='animate'
    >

        <motion.div variants={letterAnimate}>
        <h3 className='howdy color1'>
        Howdy! 
        </h3>
        </motion.div>

        <motion.div variants={letterAnimate}>
        <h1>
        <span className='highLight'>        
        I’m Noppheera B.  
        <span className='quote'><ImQuotesLeft/></span>
        </span>
        </h1>
        </motion.div>



        <motion.div className='aboutDescText' variants={letterAnimate}>
        <h3 className='aboutDescMain'>
        Web developer based in Bangkok,
        <br/>
        that love to  build various stuff on web  
        <br/> 
        and very passionate about it.
        </h3>
        </motion.div>

  
        <motion.div className='aboutDescSubText' variants={letterAnimate}>
        <p>
        Let’s make our ambitious goal become a little more clearer together.
        {/*
        And ready to be part of your team         
        and make your ambitious goal become a little more clearer together.
      */}
        </p>
        <span className='quote2'><ImQuotesRight/></span>
        </motion.div>
        
      <br/>
      

    <motion.div className='aboutGetToKnow' variants={appear}>
    <h6 className='color1 bounce2'>
    <span className='iconSpan bounce2 '><BsFillMouseFill className=" mouseWheel"/></span>
    <a href="#desc" className='orange getToKnowBounce fst-italic subFont'>
    &nbsp;Ready to get to know each other? Scroll down.&nbsp;
    </a>
    <span className='iconSpan bounce2 '><BsFillMouseFill className=" mouseWheel"/></span>
    </h6>
   
    </motion.div>
    </motion.div>
    </section>);

      
}

export {About};