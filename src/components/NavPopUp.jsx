import React,{useEffect, useRef} from "react";
import {ImCross} from "react-icons/im";
import {motion} from "framer-motion";



  const letterAnimate = {
    initial: { y: 1000 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  const container = {

    exit: {x:"100%"} ,
    initial: { x:"100%"},
    animate: {
        x:"0%",
      transition: {
        type: "spring",
        bounce: 0,
     

        ease: [0.56,0.53,0.37,1],
        duration:0.3,
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  };

function NavPopUp(props){

useEffect(() => {

    // popUp.current.classList.add('scrollLock');
    


    // document.documentElement.style.overflowY="hidden";
    return () => {
 
        // document.documentElement.style.overflowY="auto";
        // popUp.current.classList.remove('scrollLock');
    };
}, []);

const popUp = useRef();

const HandleClose = async () => {
    await new Promise((resolve)=>setTimeout(() => {
       
        resolve();
    }, 120)); 
    props.onPopUpClose();
    
}


    return(
        <motion.div 
        
        key={"popUp"}
        ref={popUp}
        className="popUp" 
        variants={container}
        initial='initial'
        animate='animate'
        exit='exit'
        >
       

        <div className="popUpDiv">
        <button className="crossButton" onClick={props.onPopUpClose}>
        <ImCross className="cross"></ImCross>
        </button>

        <motion.span variants={letterAnimate}>
        <a href="#" onClick={props.onPopUpClose}><button className="btn-normal">Home       </button></a>
        </motion.span> 
        <motion.span variants={letterAnimate}>
        <a href="#desc" onClick={props.onPopUpClose}><button className="btn-normal">About </button></a>
        </motion.span>
        <motion.span variants={letterAnimate}>
        <a href="#work" onClick={props.onPopUpClose}><button className="btn-normal">Get to know </button></a>
        </motion.span>
        <motion.span variants={letterAnimate}>
        <a href="#contact" onClick={props.onPopUpClose}> <button className="btn-normal">Contact </button></a>
        </motion.span>
        <motion.span variants={letterAnimate}>
        <a  href="/pdf/Noppheera_Resume_2023.pdf" rel='noopener noreferrer' onClick={props.onPopUpClose}><button className="btn-normal">Resume    </button></a>
        </motion.span>
        </div>
        </motion.div>
    )
}

export {NavPopUp};