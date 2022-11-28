
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const containerMotion = {
    initial: {
     

    },
    whileInView: {

        transition: {
          // delay:10,
        //   delayChildren: 2.6,

          staggerChildren: 0.2,
        },
      },
  };

const cardVariantMotion= {
    initial: {
        opacity: 0,
      y: 50
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        // bounce: 0.4,
        ease:"easeInOut",
        duration: 0.7
      }
    },
    
  };

  const appearMotion= {
    initial: {
        opacity: 0,
      y: 7
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        // bounce: 0.4,
   
        ease:"easeInOut",
        duration: 0.7
      }
    },
    
  };

  export {containerMotion,cardVariantMotion,appearMotion};