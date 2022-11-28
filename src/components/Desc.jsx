import React,{forwardRef} from 'react';
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {Title} from "./Title";
import {Home} from "./Home";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { containerMotion,cardVariantMotion } from '../AppearOnScroll';


const MotionCol = motion(Col);



const Desc = forwardRef((props,ref)=>{
  return (

      <section className="desc classMargin" id='desc' ref={ref}>
    <div  className='pad minPad'>
    <motion.div
    
    key={"desc"}
    
      
    variants={containerMotion}
        initial='initial'
        animate='animate'
        exit='exit'
    whileInView='whileInView'
    viewport={{ once: true, amount: 0.5 }}
    
    >
   

      <Row className='row-flex'>
      <MotionCol variants={cardVariantMotion} sm={12} md={12} lg={8} className="textCol">
  
          {/*
        <h3 className='howdy'>
        Howdy! 
        </h3>

        <span>
        I’m Noppheera, 
        </span>
      
        <h3>
        Web developer that Currently build stuff and very passionate about it.
        </h3>
  
        <p>
        I love to create various things. 
        And I’m ready to step out, to be part of your team and make your ambitious goal become a little more clearer together.
        </p>
              // I’ve sparked the curiosity with coding since 2018 from a lazy day boredom
              */} 


              <Title titleText={"A brief about myself."} align={"center"}/>

      <p>

      &emsp; I’m <span className='orange'>Noppheera Bhanupongpan. </span>
      

      I have self taught my way in <span className='orange'> Full Stack </span> Web Development and still going on to these day, I’m always exciting and open to learn new stuff. 

      <br/>    <br/>
      &emsp;I have graduated in Architecture major. 
      It did shape me as a <span className='orange'>well-organised-ish person </span>,<span className='orange'> problem solver</span>,<span className='orange'> High attention to detail</span> with <span className='orange'>well time management</span> .
      I excel in  communicate with <span className='orange'> story telling</span> via visual and great user-experience. I can also do <span className='orange'>brand identity</span>,<span className='orange'> graphics</span> and<span className='orange'> illustrations </span> too!



      
      








 

    

</p>
      
      </MotionCol>
      <MotionCol variants={cardVariantMotion} sm={12} md={12} lg={4} className="descPicCol">

        <div className='descPicDiv'>
        
          <img src="/images/S__3325957.png" alt="" className='descAboutPic' />
      
        </div>

  
      </MotionCol>
      
    </Row>


    </motion.div>

          
    <Home />

    </div>
    </section>);

      
});

export {Desc};