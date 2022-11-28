import React,{forwardRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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

  exit: {y:"0%"} ,
  initial: { y:"0%"},
  animate: {
      y:"-50%",
    transition: {
      ease: [0.56,0.53,0.37,1],
      duration:0.3,
      delayChildren: 3.2,
      staggerChildren: 0.25,
    },
  },
};

const SideContact = forwardRef((props,ref)=>{
  return (


    <motion.div className="sideContact"
    
    
    key={"sideContact"}


    variants={container}
    initial='initial'
    animate='animate'
    exit='exit'

    
    
    
    ref={ref}>
       
    <motion.div variants={letterAnimate}>
    <a target={"_blank"} rel={"noopener noreferrer"} href="https://www.facebook.com/NoppheeraB/">

    <FontAwesomeIcon icon={brands('facebook-square')} className="iconSide bigIcon" />
    </a>
    </motion.div>
    <motion.div variants={letterAnimate}>
    <a target={"_blank"} rel={"noopener noreferrer"} href="https://twitter.com/Mossarell">
    <FontAwesomeIcon icon={brands('twitter-square')} className="iconSide bigIcon" />
    </a>

    </motion.div>
    <motion.div variants={letterAnimate}>
    <a target={"_blank"} rel={"noopener noreferrer"} href="https://www.linkedin.com/in/mossarelladev">
    <FontAwesomeIcon icon={brands('linkedin')} className="iconSide bigIcon" />
    </a>

    </motion.div>

    
    <motion.div variants={letterAnimate}>
    <a target={"_blank"} rel={"noopener noreferrer"} href="https://github.com/Mossarella">
    <FontAwesomeIcon icon={brands('github-square')} className="iconSide bigIcon" />
    </a>

    </motion.div>
        
   



        
        </motion.div>
  );
})


export {SideContact};
