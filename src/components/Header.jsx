import React from "react";
import { Container,Row,Col,Nav,Navbar,NavDropdown, Button  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




function Header(props) {
  return (
    <header className="header">

 



  <Navbar collapseOnSelect expand="md" className="nav">
        <Navbar.Brand href="#">
        <img
          alt="LOGO"
          src="/images/try.png"
          width="30"
          height="30"
          className="mainLogo"
        />
        </Navbar.Brand>

      {/*
    */} 

    <Navbar.Toggle aria-controls="responsive-navbar-nav" >
    <FontAwesomeIcon icon={solid('bars')} className="hamburger icon" />


    </Navbar.Toggle>
   


        <Navbar.Collapse id="responsive-navbar-nav">
    

          <Nav className="ms-auto">

            <Nav.Link href="#">About</Nav.Link>
            <span className="x">x</span>
            <Nav.Link href="#">Skills</Nav.Link>
            <span className="x">x</span>

            <Nav.Link href="#">Works</Nav.Link>
            <span className="x">x</span>

            <Nav.Link href="#">Contact</Nav.Link>
            <span className="x">x</span>

            <Nav.Link href="#">Extras</Nav.Link>
            <span className="x">x</span>
            <Nav.Link href="#" className="resume">Resume</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>


        </Navbar>
        





  {/*
      <div>
        <div>
          <img
            src="/Photo/2559831_box_media_network_social_icon.png"
            alt="logoTop"
          />
        </div>
        
      </div>
      <div>
      <ul>
      <li>
        <a href={props.link}>ABOUT</a>
      </li>
      <li>
        <a href={props.link}>SKILLS</a>
      </li>
      <li>
        <a href={props.link}>WORK</a>
      </li>
      <li>
      <a href={props.link}>MORE+</a>
      </li>
      <li>
        <a href={props.link}>CONTACT</a>
      </li>

    </ul>
      </div>
  */}
    </header>
  );
}

export {Header};
