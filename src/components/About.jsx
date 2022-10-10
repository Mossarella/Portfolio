import React from 'react';
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {BsFillMouseFill} from "react-icons/bs";


function About(){
  return (
      <section className="about classMargin" id='about'>
  
   

      
  
        <h3 className='howdy'>
        Howdy! 
        </h3>

        <span className='highLight'>
        I’m Noppheera B.  
        </span>
        <div className='aboutDescText'>
        <h3 className='aboutDescMain'>
        Web developer based in Bangkok, that currently build stuff 
    
        and very passionate about it.
        </h3>
        </div>
  
        <div className='aboutDescSubText'>
        <p>
        I love to create various things. 
        And ready to be part of your team 
        
        and make your ambitious goal become a little more clearer together.
        </p>
        </div>
        
      
      

    <div className='aboutGetToKnow'>
    <h6>
    <span><BsFillMouseFill className="icon mouseWheel"/></span>
    &nbsp;Let’s get to know each other a little more&nbsp;
    <span><BsFillMouseFill className="icon mouseWheel"/></span>
    </h6>
   
    </div>
 
    </section>);

      
}

export {About};