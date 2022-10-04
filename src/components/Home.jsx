import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import {Swipes} from "./Swipes";





function Home() {


  const [page,setPage]=useState(0);
  const [controlledSwiper,setControlledSwiper]=useState(null);

 

  const [display,setDisplay]=useState(false);
  function Display(e){

    if(!display){
      setDisplay(!display);
      setPage(e.target.value);
    
    }
    else{
      
      if(controlledSwiper){
        

        if(controlledSwiper.activeIndex.toString()===e.target.value){
          console.log("dude");
          setDisplay(!display); 

        }
        else{

          controlledSwiper.slideTo(e.target.value);
        }
   
      }
      
    }
  }



  return (
    <section className="home">
    <div className="question">
      <h3>
        They said first impression is everything. So I’m gonna let you choose,
        How would you like to know me.
        {/*
        Howdy! I’m Noppheera, A guy that loves to create various things and is very into the web-development. I’m beyond ready to join and assist you, in other words. To make your ambitious goal a little bit more clearer
        */}
      </h3>
      </div>

      {display?
        <Swipes onSwiper={setControlledSwiper} page={page}/>:null     
      
      
      }



      <div className="buttonSet">
      <Row>
        <Col sm={12} md={4}>
          <div>
          <button onClick={Display} value={0}>
          As Developer
          </button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div>
          <button onClick={Display} value={1}>
          
          As Designer
          </button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div>
          <button onClick={Display} value={2}>
          As Myself
          
          </button>
          </div>
        </Col>
      </Row>
      </div>


     



    </section>



    
  );
}

export { Home };
