import React,{useState} from "react";
import { NavPopUp } from "./NavPopUp";
import { Container,Row,Col,Nav,Navbar,NavDropdown, Button  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




function Header(props) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  
  



  return (
    <header className="header">

    {isPopUpOpen?<NavPopUp onPopUpClose={()=>{setIsPopUpOpen(false)}}/>:null}

  


  <Navbar collapseOnSelect expand="md" className="nav">
        <Navbar.Brand href="#">
        <img
          alt="LOGO"
          src="/images/try.png"
          width="30"
          height="30"
          className="mainLogo"
          href="."
        />
        </Navbar.Brand>

      {/*
    */} 

    <button aria-controls="responsive-navbar-nav" className="hamburgerButton" onClick={()=>{
      setIsPopUpOpen(true)
    }}>
    <FontAwesomeIcon icon={solid('bars')} className="hamburgerIcon icon" />


    </button>
   


        <Navbar.Collapse id="responsive-navbar-nav">
    

          <Nav className="ms-auto">

            <Nav.Link href="#desc">About</Nav.Link>
            <span className="x">x</span>



            <Nav.Link href="#home">Get to know</Nav.Link>      
            <span className="x">x</span>
            
            <Nav.Link href="#contact">Contact</Nav.Link>
            <span className="x">x</span>
            <Nav.Link href="#contact">Resume</Nav.Link>
    

            

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
