import React from 'react';
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {Title} from "./Title";


function Desc(){
  return (
      <section className="desc classMargin" id='desc'>
  
   

      <Row className='row-flex'>
      <Col sm={12} md={12} lg={8} className="textCol">
  
          {/*
        <h3 className='howdy'>
        Howdy! 
        </h3>

        <span>
        I’m Noppheera, 
        </span>
      
        <h3>
        Web developer that Currently build stuff and very passionate about it.
        </h3>
  
        <p>
        I love to create various things. 
        And I’m ready to step out, to be part of your team and make your ambitious goal become a little more clearer together.
        </p>
              // I’ve sparked the curiosity with coding since 2018 from a lazy day boredom
              */} 


              <Title titleText={"About me"}/>

      <p>

      &emsp;I’m Noppheera Bhanupongpan. 
      

      I have self taught my way in Full Stack Web Developer and still going on to these day, Always exciting and open to learn new stuff. 

      <br/>    
      &emsp;I graduated, mold and cast from Architecture major. 
      It shaped me as a well-organised-ish person, problem solver, High attention to detail. Combine with time management and attainment.
      Excel in communicate with story telling via visual and great user-experience. I can also do brand identity, graphics and illustrations too!



      
      








 

    

</p>
      
      </Col>
      <Col sm={12} md={12} lg={4} className="descPicCol">
        <div className='descPicDiv'>
        
        <img src="/images/S__3325957.jpg" alt="" className='descAboutPic' />
        </div>
  
      </Col>
      
    </Row>
 
    </section>);

      
}

export {Desc};