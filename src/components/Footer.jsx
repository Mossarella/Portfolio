import React from "react";
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import { motion } from "framer-motion";
import { containerMotion,cardVariantMotion,appearMotion } from '../AppearOnScroll';


function Footer(){

    const date=new Date();
    const year=date.getFullYear();

    return (
        <footer className="footer classMargin">

        <motion.div  
        key={"footer"}
        variants={appearMotion}
        initial='initial'
        animate='animate'
        exit='exit'
    whileInView='whileInView'
    viewport={{ once: false, amount: 0.5 }}>
          
        <Row className="bigPad">
        <Col  sm={12} md={2} className="footCol footCol1">
        <div className="footerPicDiv">
          <img src="/images/logomainred.jpg" alt="" className="footerPic"/>
          </div>
        </Col>
        <Col   sm={12} md={7} className="footCol footCol2">
          <div className="footerDescDiv">
          <p>
         
          
        
          Handcrafted from dust by Noppheera B.
          <br/>
          &#169;{year} MossarellaDev
    
           All rights reserved 
          
          </p>
          </div>
        </Col>
        <Col   sm={12} md={3} className="footCol footCol3">
          <div className="footerReachDiv">
          <p>
          Reach me

          <br/>
          

          <a target={"_blank"} rel={"noopener noreferrer"} href="https://www.facebook.com/NoppheeraB/">

          <FontAwesomeIcon icon={brands('facebook-square')} className="icon" />
          </a>
          <a target={"_blank"} rel={"noopener noreferrer"} href="https://twitter.com/Mossarell">
    <FontAwesomeIcon icon={brands('twitter-square')} className="icon" />
    </a>
    <a target={"_blank"} rel={"noopener noreferrer"} href="https://www.linkedin.com/in/mossarelladev">
    <FontAwesomeIcon icon={brands('linkedin')} className="icon" />
    </a>
    <a target={"_blank"} rel={"noopener noreferrer"} href="https://github.com/Mossarella">
    <FontAwesomeIcon icon={brands('github-square')} className="icon" />
    </a>

          </p>
          
          </div>
          </Col>
          </Row>
          </motion.div>


        
      


   
       
        </footer>);


        /*
            youtube
            github
            ig
            fb
            linkedin
            facebook

        */
}

export {Footer};