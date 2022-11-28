import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Pagination, Thumbs, FreeMode } from "swiper";
import {IoMdArrowDroprightCircle} from "react-icons/io";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { containerMotion,cardVariantMotion } from '../AppearOnScroll';

const MotionCol = motion(Col);
function Skill() {
  return (
    <section className="skill classMargin" id="skill">
      <div className="bigPad minPad">
      <motion.div
    
 
    
      
    variants={containerMotion}
        initial='initial'
        animate='animate'
        exit='exit'
    whileInView='whileInView'
    viewport={{ once: true, amount: 0.5 }}
    
    >
    
    <motion.div variants={cardVariantMotion}>
        <Title titleText={"As Designer."} align="right"></Title>
        <p className="justify skillDesc">
          &emsp;Studied directly from design major. I have got
          some <span className="strike">mad</span> advance understanding in
          design skill from ground up. I indeed can adapt and improvise my knowledge to many possibilities in various way. Here are some of my
          design related work I’ve gathered.
        </p>
        </motion.div>
        </motion.div>


        <motion.div
    
 
    
      
        variants={containerMotion}
            initial='initial'
            animate='animate'
            exit='exit'
        whileInView='whileInView'
        viewport={{ once: true, amount: 0.5 }}
        
        >
        <motion.div variants={cardVariantMotion}>
        <div className=" tectWrapper">
          <Row className=" gx-0">
            <Col
              sm={{ span: 12, order: 1 }}
              md={{ span: 12, order: 1 }}
              lg={{ span: 12, order: 1 }}
              xl={{span: 8, order: 2}}
            >
              <Swiper
                navigation={true}
                
                loop={true}
                breakpoints={{
                  1:{
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  767.98: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  991.98: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  1199.98:{
                    slidesPerView: 2,
                    spaceBetween: 15,
                  }
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper tectDiv2"
              >
              
                <SwiperSlide className="swiperItem">
                  <Row
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="swiperWrapper gx-0"
                  >
                  <a href="https://youtu.be/EODRj3oHTD0" target={"blank"} className="h-100">
                  <div className="zoomable grayScale swiperDiv tectProj1 ">
                  <img className="projImg" src="/images/Enscape_2022-04-25-18-59-47.png" alt="" />
                  <IoMdArrowDroprightCircle className="playArrow"></IoMdArrowDroprightCircle>
                  </div>
                  </a>
                    <div className="swiperDiv2">
                    <img className="logoLabel" src="/images/logowithcircle.png" alt="" />
                    <h3>
                    <span className="">
                    WORKMAN
                    </span>
                    </h3>
                      <p>
                      Creative center,
                      <br/>
                      Bachelor degree thesis
                      </p>
              
                      </div>
                      <div className="swiperDiv3">
                  
                      <button className="pushShadow">
                      <a target={"_blank"} rel={"noopener noreferrer"} href="https://youtu.be/EODRj3oHTD0">
                      Learn more
                      </a>
                      </button>
              
                      </div>
                  </Row>
                </SwiperSlide>
                <SwiperSlide className="swiperItem">
                  <Row
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="swiperWrapper gx-0"
                  >
                  <a href="https://youtu.be/lBTrAK-YQyA" target={"blank"} className="h-100">
                    <div className="swiperDiv tectProj1 grayScale zoomable ">
                    <img className="projImg" src="/images/E 4 แก้.jpg" alt="" />
                    <IoMdArrowDroprightCircle className="playArrow"></IoMdArrowDroprightCircle>
                    </div>
                    </a>
                    <div className="swiperDiv2">
                    <img className="logoLabel" src="/images/logowithcircle2.png" alt="" />

                    <h3>
                    WHITE CUBE
                    </h3>
                      <p>
                      Medical center,
                      <br/>
                      Top 5 in Ramathibodi hospital architecture competition
                      </p>
                     
                      </div>
                      <div className="swiperDiv3">
             
                      <button className="pushShadow">
                      <a target={"_blank"} rel={"noopener noreferrer"} href="https://youtu.be/lBTrAK-YQyA">
                      Learn more
                      </a>
                      </button>
          
                      </div>
                  </Row>
                </SwiperSlide>
             
                <SwiperSlide className="swiperItem">
                  <Row
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="swiperWrapper gx-0"
                  >
                    <div className="tectProj0 blurable">
                    <a className="h-100 w-100" href="https://issuu.com/mossarella/docs/port_to_issu" target={"blank"}><img className="projImg" src="/images/port2.png" alt=""  /></a>
                      
                      
             
                      </div>
                    
                    
                  </Row>
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col
              sm={{ span: 12, order: 2 }}
              md={{ span: 12, order: 2 }}
              lg={{ span: 12, order: 2 }}
              xl={{span: 4, order: 1}}
            >
              <div className="tectDiv1">
           
              <h1>
              <span className=" black bold">
              DESIGN WORKS
              </span>
              </h1>
              <p className="orange">Swipe around to discover more</p>
  
       
        
     
       
           
              </div>
            </Col>
          </Row>
        </div>
        </motion.div>
        </motion.div>
        <motion.div
    
 
    
      
        variants={containerMotion}
            initial='initial'
            animate='animate'
            exit='exit'
        whileInView='whileInView'
        viewport={{ once: true, amount: 0.5 }}
        
        >
        <motion.div variants={cardVariantMotion}>
        <p className="skillDesc2">Designing is something that all about them people. And you got me.</p>
        </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export { Skill };
