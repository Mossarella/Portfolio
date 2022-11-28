import React, { Suspense,useState } from "react";
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion"






 // <div className="loader">
    // </div>
    // Loading
    // </div>
    let trueLoadingTime=3000;
    let loadingTime=0;
    const App = React.lazy(() => {
        return Promise.all([
          import("./App"),
          new Promise(resolve => setTimeout(resolve, trueLoadingTime))
        ])
        .then(([moduleExports]) => moduleExports)
        
      });

  function LoadingScreen(){
    return <div className="loaderComponent">
    

    <img className="loadingIcon" src="/images/logonewnewnew9.gif" alt="" />

    </div>
  }

function Loader() {
  



    return (
      <AnimatePresence  mode={"wait"} >
      <motion.div 
   
      key={"loader"}>

      <AnimatePresence  mode={"wait"} >
      <Suspense fallback={LoadingScreen()}>
      <App key={"app"} />
      </Suspense>
      
      </AnimatePresence>
      </motion.div>
      </AnimatePresence>
    );
  }
  
  export { Loader,LoadingScreen };