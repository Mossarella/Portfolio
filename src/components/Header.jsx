import React, { useState } from "react";
import { NavPopUp } from "./NavPopUp";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const MotionNavbar = motion(Navbar);
const MotionNav =motion(Nav);

function Header(props) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const container = {
    show: {
      transition: {
        delayChildren: 1.0,
        staggerChildren: 0.08,
      },
    },
  };



  const item = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition:{
        ease: [0.6, 0.01, -0.05, 0.95],
        y: { duration: 1 },
        opacity:{duration:2}
        
      },
      
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
  
    },
  };

  const shook = {
    hidden: { scale: 0 },
    show: {
      
      scale: [0, 1.5, 1, 1],
      transition:{
        
        ease: [0.6, 0.01, -0.05, 0.95],
        delay : 2.2,
        duration: 2
        
      },
      
    },
    exit: {
      scale: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
  
    },
  };

  

  

  return (
    <header className="header">
      <AnimatePresence initial={false} mode={"wait"} >
        {isPopUpOpen && (
          <NavPopUp
            key="popUp"
            onPopUpClose={() => {
              setIsPopUpOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <Navbar collapseOnSelect expand="md" className="nav">
        <motion.div
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   ease: "easeInOut",
          //   duration: 1,
          //   delay: 0.2,
          // }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.5, 1, 1, 1],
            scale: [0, 1.2, 1, 1],
            rotate: [0, 1080, 1080, 1080],
          }}
          transition={{
            delay:1,
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <a href="#">
            <img
              alt="LOGO"
              src="/images/logonewnewnew6.png"
              width="30"
              height="30"
              className="mainLogo"
            />
          </a>
        </motion.div>

        {/*
         */}

 
         <button
         aria-controls="responsive-navbar-nav"
         className="hamburgerButton"
         onClick={() => {
            setIsPopUpOpen(true);
          }}
          >
          <FontAwesomeIcon icon={solid("bars")} className="hamburgerIcon" />
          </button>
   

        <Navbar.Collapse id="responsive-navbar-nav">
          <MotionNav variants={container}  className="ms-auto"
          initial="hidden"
          animate="show"
          exit="exit"
          
          >
          <motion.span
          variants={item}
          
          >
          <a className="nav-link" href="#desc">
                About
                </a>
              </motion.span>
            <motion.span className="x" variants={shook}>x</motion.span>

            <motion.span
            variants={item}
            >
            <a className="nav-link" href="#home">
                Get to know
                </a>
              </motion.span>
            <motion.span className="x" variants={shook}>x</motion.span>

            <motion.span
            variants={item}
            >
            <a className="nav-link" href="#contact">
                Contact
                </a>
              </motion.span>
            <motion.span className="x" variants={shook}>x</motion.span>
            <motion.span
            variants={item}
            >
              <a  href="/pdf/Noppheera_Resume_2023.pdf" rel='noopener noreferrer' className="nav-link resumeBtn">
                Resume
              </a>
            </motion.span>
          </MotionNav>
        </Navbar.Collapse>
      </Navbar>

      {/*
      <div>
        <div>
          <img
            src="/Photo/2559831_box_media_network_social_icon.png"
            alt="logoTop"
          />
        </div>
        
      </div>
      <div>
      <ul>
      <li>
        <a href={props.link}>ABOUT</a>
      </li>
      <li>
        <a href={props.link}>SKILLS</a>
      </li>
      <li>
        <a href={props.link}>WORK</a>
      </li>
      <li>
      <a href={props.link}>MORE+</a>
      </li>
      <li>
        <a href={props.link}>CONTACT</a>
      </li>

    </ul>
      </div>
  */}
    </header>
  );
}

export { Header };
