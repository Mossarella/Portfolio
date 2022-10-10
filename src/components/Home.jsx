import React, { useState,Suspense,useEffect  } from "react";
import { Row, Col } from "react-bootstrap";
import { Title } from "./Title";

const Swipes = React.lazy(() => import("./Swipes"));
// import {Swipes} from "./Swipes";




function Home() {



  const [controlledSwiper,setControlledSwiper]=useState(null);
  const [display,setDisplay]=useState(false);


  


  function Display(e){

    if(!display){
      setDisplay(!display);
      controlledSwiper.slideTo(e.target.name);

    }
    else{
      if(controlledSwiper){


        if(controlledSwiper.activeIndex.toString()===e.target.name){
          console.log("dude");
          setDisplay(!display); 
        }
        else{
          
          
          controlledSwiper.slideTo(e.target.name);
        }
   
      }
      
    }
  }



  return (
    <section className="home classMargin"  id="home">

    
    
    <div className="question" id="question">

      <h3>
        They said first impression is everything. So I’m gonna let you choose,
        How would you like to know me.
   
      </h3>
    </div>

   
    
    <Suspense>
    <Swipes style={{ display: display? 'block': 'none' }} onSwiper={setControlledSwiper}/>
    </Suspense>

      <div className="buttonSet">
      <Row>
        <Col sm={12} md={4}>
          <div>
  
          
          <a href={display?"#question":"#desc"} onClick={Display} name={0}>As Developer</a>

  
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div>

          <a href={display?"#question":"#desc"} onClick={Display} name={1}>As Designer</a>

          
    
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div>
          <a href={display?"#question":"#desc"} onClick={Display} name={2}>As Myself</a>

          </div>
        </Col>
      </Row>
      </div>


     



    </section>



    
  );
}

export { Home };
