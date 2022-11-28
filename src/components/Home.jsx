import React, { useState,Suspense,useEffect  } from "react";
import { Row, Col } from "react-bootstrap";


import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// import {Swipes} from "./Swipes";

import { containerMotion,cardVariantMotion } from '../AppearOnScroll';


const MotionCol = motion(Col);


function Home() {





  


  



  return (
    <section className="home"  id="home">

    
    
    <motion.div  
    key={"home"}
    variants={containerMotion}
    initial='initial'
    animate='animate'
    exit='exit'
whileInView='whileInView'
viewport={{ once: true, amount: 0.5 }}>

    <div  className="question pad" id="question">
  
    <motion.div variants={cardVariantMotion}>
      <h3>
        They said <span className="bold ">first impression</span> is everything. 
        <br/>
        So.., How would you like to know me as.
   
      </h3>
      </motion.div>
</div>
   
    
    

      <div className="buttonSet">
      <Row>
        <MotionCol variants={cardVariantMotion} xs={12} sm={12} md={4}>
          <div>
  
          
          
          <a href="#work" name={0}><button className="btn-normal">As Developer</button></a>
          

  
          </div>
        </MotionCol>
        <MotionCol variants={cardVariantMotion} xs={12} sm={12} md={4}>
          <div>

          
          
          <a href="#skill" name={1}><button className="btn-normal">As Designer </button></a>
         

          
    
          </div>
        </MotionCol>
        <MotionCol variants={cardVariantMotion} xs={12} sm={12} md={4}>
          <div>
          
          <a href="#extra" name={2}><button className="btn-normal">As Me</button></a>
          

          </div>
        </MotionCol>
      </Row>
      </div>


     
      </motion.div>


    </section>



    
  );
}

export { Home };
