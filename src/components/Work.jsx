import React from "react";
import { Row, Col } from "react-bootstrap";
import {FaHtml5,FaCss3Alt,FaBootstrap,FaNodeJs,FaGitAlt} from "react-icons/fa";
import {SiJavascript,SiJquery,SiReact,SiMongodb,SiExpress,SiAdobexd} from "react-icons/si";
import {GiGears} from "react-icons/gi";
import {CgFigma} from "react-icons/cg";
import {BsArrowsFullscreen} from "react-icons/bs";

function Work() {
  return (
    <div>
      <h1>
      As Developer
      </h1>
      <p>
      I’ve sparked with programming since I’m in college and manage to spent my little free time to practice it since. 
      Building things and bring it to life always gives me joy, Here are some skill and technologies I’m capable of. The list will absolutely grow as i grow.
      </p>

      <Row>
        <Col sm={12} md={12}>
          <div>
      
          Frontend side
          <div className="frontEndRow">
  
          
          <div className="skillBox"><FaHtml5/><br/>Html5</div>
          <div className="skillBox"><FaCss3Alt/><br/>Css3</div>
          <div className="skillBox"><SiJavascript/><br/>Javascript(es6+)</div>
          <div className="skillBox"><FaBootstrap/><br/>Bootstrap</div>
          <div className="skillBox"><SiJquery/><br/>JQuery</div>
          <div className="skillBox"><SiReact/><br/>React</div>
          
 
          </div>
         

     
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div>
     
          
          Backend side
          <div className="frontEndRow">

          <div className="skillBox"><SiMongodb/><br/>MongoDB/Mongoose</div>
          <div className="skillBox"><SiExpress/><br/>Express</div>
          <div className="skillBox"><FaNodeJs/><br/>Node.js</div>
          <div className="skillBox">EJS<br/>EJS</div>
          <div className="skillBox"><img src="/images/436f03078e9fd8ff295d29d7216d271d.png" alt="" style={{width:"20px", height:"auto"}} /><br/>SQL</div>
          <div className="skillBox"><GiGears/><br/>RestfulAPIs</div>

          </div>

          </div>
        </Col>
        <Col sm={12} md={12}>
          <div>

          Something worth mention

          <div className="frontEndRow">

          <div className="skillBox"><FaGitAlt/><br/>GIT</div>
          <div className="skillBox"><CgFigma/><br/>Figma</div>
          <div className="skillBox"><SiAdobexd/><br/>XD</div>
          <div className="skillBox"><BsArrowsFullscreen/><br/>Responsive design</div>

          </div>
  
          </div>
        </Col>
      </Row>

      Some stuff i have built

    </div>
  );
}

export {Work};
