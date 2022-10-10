import React from "react";
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Footer(){

    const date=new Date();
    const year=date.getFullYear();

    return (
        <footer className="footer classMargin">

        <Row>
        <Col  sm={12} md={2} className="footCol footCol1">
        <div className="footerPicDiv">
          <img src="/images/logomainred.jpg" alt="" className="footerPic"/>
          </div>
        </Col>
        <Col  sm={12} md={7} className="footCol footCol2">
          <div className="footerDescDiv">
          <p>
         
          
        
          Handcrafted from dust by Noppheera B.
          <br/>
          &#169;{year} MossarellaDev
    
           All rights reserved 
          
          </p>
          </div>
        </Col>
        <Col  sm={12} md={3} className="footCol footCol3">
          <div className="footerReachDiv">
          <p>
          Reach me

          <br/>
          
          <FontAwesomeIcon icon={brands('facebook-square')} className="icon" />
          <FontAwesomeIcon icon={brands('twitter-square')} className="icon" />
          <FontAwesomeIcon icon={brands('linkedin')} className="icon" />
          <FontAwesomeIcon icon={brands('youtube-square')} className="icon" />
          <FontAwesomeIcon icon={brands('github-square')} className="icon" />

          </p>
          
          </div>
          </Col>
      </Row>


      


   
       
        </footer>);


        /*
            youtube
            github
            ig
            fb
            linkedin
            facebook

        */
}

export {Footer};