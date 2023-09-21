import React, { forwardRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaCoins,
  FaDocker,
  FaJira
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiReact,
  SiMongodb,
  SiExpress,
  SiAdobexd,
  SiFirebase,
  SiAngular,
  SiKubernetes,
  SiTypescript
} from "react-icons/si";
import { GiGears } from "react-icons/gi";
import { AiFillCheckSquare } from "react-icons/ai";
import { CgFigma, CgFramer } from "react-icons/cg";
import { BsArrowsFullscreen } from "react-icons/bs";
import { BsFillTerminalFill } from "react-icons/bs";

import { WorkShowCase } from "./WorkShowCase";
import { Title } from "./Title";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { containerMotion, cardVariantMotion } from "../AppearOnScroll";

const MotionCol = motion(Col);

const Work = forwardRef((props, ref) => {
  return (
    <section className="work classMargin" id="work" ref={ref}>
      <div className="minPad">
        <div className="bigPad">
          <motion.div
            variants={cardVariantMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
          >
       
              <Title titleText={"As Developer."} align="left"></Title>

              <p className="workDesc">
                &emsp;I’ve sparked with programming since I’m in college and
                manage to spent my little free time to sharpen it.
                Building things and bring it to life always give me joy, Here
                are some skill and technologies I’m capable of.
              </p>
    
          </motion.div>

          <motion.div
            variants={containerMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Row className="workRow">
              <MotionCol variants={cardVariantMotion} sm={12} md={12} lg={4}>
                <div className="skillBoxWhole ">
                  <Row className="skillTitle">
                    <p className="bold">Frontend</p>
                  </Row>
                  <Row className="skillTitle2" xs={3} sm={3} md={3} lg={2}>
                    <div className="skillBox">
                      <FaHtml5 className="skillIcon" />
                      <br />
                      Html5
                    </div>
                    <div className="skillBox">
                      <FaCss3Alt className="skillIcon" />
                      <br />
                      Scss
                    </div>

                    <div className="skillBox">
                      <SiTypescript className="skillIcon" />
                      <br />
                      JS/TS
                    </div>
                    <div className="skillBox">
                      <FaBootstrap className="skillIcon" />
                      <br />
                      Bootstrap
                    </div>

                    <div className="skillBox">
                      <SiJquery className="skillIcon" />
                      <br />
                      JQuery
                    </div>
                    <div className="skillBox">
                      <SiReact className="skillIcon" />
                      <br />
                      React
                    </div>
                     <div className="skillBox">
                      <SiAngular className="skillIcon" />
                      <br />
                      Angular
                    </div>
            
                    
                    <div className="skillBox">
                      <CgFramer className="skillIcon" />
                      <br />
                      Framer
                    </div>
               
                  </Row>
                </div>
              </MotionCol>
              <MotionCol variants={cardVariantMotion} sm={12} md={12} lg={4}>
                <div className="skillBoxWhole ">
                  <Row className="skillTitle">
                    <p className="bold">Backend</p>
                  </Row>

                  <Row className="skillTitle2" xs={3} sm={3} md={3} lg={2}>
                    <div className="skillBox">
                      <SiMongodb className="skillIcon" />
                      <br />
                      MongoDB
                    </div>
                    <div className="skillBox">
                      <SiExpress className="skillIcon" />
                      <br />
                      Express
                    </div>
                    <div className="skillBox">
                      <FaNodeJs className="skillIcon" />
                      <br />
                      Node.js
                    </div>
                    <div className="skillBox">
                      <span className="skillIcon">EJS</span>
                      <br />
                      EJS
                    </div>
                    <div className="skillBox">
                      <FaCoins className="skillIcon" />
                      <br />
                      SQL
                    </div>
                    <div className="skillBox">
                      <GiGears className="skillIcon" />
                      <br />
                      RestfulAPIs
                    </div>
                    <div className="skillBox">
                      <SiFirebase className="skillIcon" />
                      <br />
                      Firebase
                    </div>
                  </Row>
                </div>
              </MotionCol>
              <MotionCol variants={cardVariantMotion} sm={12} md={12} lg={4}>
                <div className="skillBoxWhole ">
                  <Row className="skillTitle">
                    <p className="bold">Misc</p>
                  </Row>

                  <Row className="skillTitle2" xs={3} sm={3} md={3} lg={2}>
                    <div className="skillBox">
                      <FaGitAlt className="skillIcon" />
                      <br />
                      GIT
                    </div>
                    <div className="skillBox">
                      <CgFigma className="skillIcon" />
                      <br />
                      Figma/XD
                    </div>
                    <div className="skillBox">
                      <BsArrowsFullscreen className="skillIcon" />
                      <br />
                      Responsive
                    </div>

              
                    <div className="skillBox">
                      <BsFillTerminalFill className="skillIcon" />
                      <br />
                      CLI
                    </div>
            
                  
                    <div className="skillBox">
                      <AiFillCheckSquare className="skillIcon" />
                      <br />
                      Unit test
                    </div>
                    
                    <div className="skillBox">
                      <FaDocker className="skillIcon" />
                      <br />
                      Docker
                    </div>
                    <div className="skillBox">
                      <SiKubernetes className="skillIcon" />
                      <br />
                      Kubes
                    </div>
                    <div className="skillBox">
                      <FaJira className="skillIcon" />
                      <br />
                      Jira
                    </div>
                  </Row>
                </div>
              </MotionCol>
            </Row>

            <motion.div variants={cardVariantMotion}>
              <p className="workDesc2">
                Rest assured. The list will absolutely grow as i grow!
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className={"proj pad"}>
          <motion.div
            variants={cardVariantMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
          >
            
              <Title titleText={"Most recent projects."} align="center"></Title>
              </motion.div>

     
              <WorkShowCase title={"WHOLLY!"} desc={ `Friends make whole, Wholly is a chat apllication made with react, highly inspired by Line.
              Wholly is a personal project made for self-educating and practice purposes involving firebase. It got basic feature like database login/ register, real time chatting, 
              changing profile picture and display name.
              `} tech={
                <div className="flex flex-row justify-content-center align-content-center">
                <FaHtml5 className="skillIcon ms-2 me-2" /> 
                <FaCss3Alt className="skillIcon ms-2 me-2" />
                <FaBootstrap className="skillIcon ms-2 me-2" />
                <SiReact className="skillIcon ms-2 me-2" />
                <SiFirebase className="skillIcon ms-2" />
                </div>
            
            
            
            
            
            } link={"https://whollychat.mossarelladev.com/"} img={"/images/142.png"} 
            caption={"Chat application"}
            credentials={"id:test1/2@test.com pass:123456"}>
            </WorkShowCase>
       
              
              <WorkShowCase title={"UNTOLD"} desc={ `
              Untold is an application made with silly idea about itching to hold a secret to yourself. App itself is involving mongoDB database and Google/Facebook Oauth as spotlight feature.
              The most critical part is to deploying the backend while connecting an online database from Mongoatlas.

              `} tech={
                <div className="flex flex-row justify-content-center align-content-center">
                <FaHtml5 className="skillIcon ms-2 me-2" /> 
                <FaCss3Alt className="skillIcon ms-2 me-2" />
                <FaBootstrap className="skillIcon ms-2 me-2" />
                <SiMongodb className="skillIcon ms-2 me-2" />
                <SiExpress className="skillIcon ms-2 me-2" />
<FaNodeJs className="skillIcon ms-2 me-2" />
<span className="skillIcon ms-2 me-2">EJS</span>
                </div>
                
               } 
              link={"https://untold.onrender.com/"} img={"/images/MacBook Pro in Cafe Mockup.png"} caption={"Anonymous webboard"}credentials={"id:test1@test.com pass:123456"}></WorkShowCase>
       
              <motion.div
              variants={cardVariantMotion}
              initial="initial"
              animate="animate"
              exit="exit"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="workDesc2">
              More project wating to be deploy soon...
            </p>
            </motion.div>

        </div>
      </div>
    </section>
  );
});

export { Work };
