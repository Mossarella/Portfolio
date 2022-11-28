import React,{forwardRef} from "react";




const SideButton = forwardRef((props,ref)=>{
  return (
    <div className="getToKnowButtonDiv" ref={ref}>    
   
    
    <a href="#work">

    <button className="getToKnowButton getToKnowButtonWork " >DEV</button>
    </a>

    <a href="#skill">

    <button className="getToKnowButton getToKnowButtonSkill " >DSGNR</button>
</a>
    


    <a href="#extra"><button className="getToKnowButton getToKnowButtonExtra  " >ME</button></a>
    </div>
  );
})


export {SideButton};
