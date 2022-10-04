import React from "react";
import { Container,Row,Col,Nav,Navbar,NavDropdown  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Footer(){

    const date=new Date();
    const year=date.getFullYear();

    return (
        <footer className="footer">

        <Row>
        <Col  sm={12} md={2}>
        <div className="footerPicDiv">
          <img src="/images/logomainred.jpg" alt="" className="footerPic"/>
          </div>
        </Col>
        <Col  sm={12} md={6}>
          <div className="footerDescDiv">
          <p>
         
          
        
          Handcrafted from dust by Noppheera B.
          <br/>
          &#169;{year} MossarellaDev
          <br/>
           All rights reserved 
          
          </p>
          </div>
        </Col>
        <Col  sm={12} md={4}>
          <div className="footerReachDiv">
          <p>
          Reach out

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