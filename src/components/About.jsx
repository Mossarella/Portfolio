import React from 'react';
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function About(){
  return (
      <section className="about">
  
   

      <Row className='row-flex'>
      <Col sm={12} md={12} lg={8} className="textCol">
  
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

      
      </Col>
      <Col sm={12} md={12} lg={4} className="picCol">
        <div className='aboutPicDiv'>
        
        <img src="/images/S__3325957.jpg" alt="" className='aboutPic' />
        </div>
  
      </Col>
      
    </Row>
    <Row>
    <div className='aboutGetToKnow'>
    <h3>
    Let’s get to know each other a little more
    </h3>
    <span>
    scroll down!
    </span>
    </div>
    </Row>
    </section>);

      
}

export {About};