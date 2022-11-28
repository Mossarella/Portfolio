import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { containerMotion, cardVariantMotion } from "../AppearOnScroll";
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";
import {IoMdArrowDroprightCircle} from "react-icons/io";

function WorkShowCase(props){

    return (<div className="workShowCase">
        
    <div className="smallPad">
    <motion.div
    variants={cardVariantMotion}
    initial="initial"
    animate="animate"
    exit="exit"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.5 }}
  >

  <Row className="showCaseRow  gy-4">
  <Col className="showCaseDescCol" sm={12} md={12} lg={12} xl={5}>

    <div className="showcaseDescColDiv">
    

    <p className="orange fst-italic">{props.caption}</p>
    <h1 className="bold">{props.title}</h1>
   
    

    <p>&emsp;{props.desc}</p>
    
    <p>{props.credentials}</p>
    {props.tech}
    </div>
    </Col>
  <Col className="showCasePicCol" sm={12} md={12} lg={12} xl={7}>

  <a href={props.link} target="blank" className="w-100 h-100 d-flex align-items-center justify-content-center">
  <div className="zoomable borderShadow h-100 ">

  <img className="showCaseImgBox "  src={props.img} alt="" />
  </div>
  </a>
    


    </Col>


    
    </Row >

    </motion.div>
    </div>
    
    </div>)
}

export {WorkShowCase};