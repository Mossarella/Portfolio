import React,{useEffect} from "react";
import { Container } from "react-bootstrap";


function Title(props){






    return(
        <div className="title" >
            <h1>
            {props.titleText}
            <Container fluid className="underLine">
        
            </Container>
            </h1>
        </div>
    )
}

export {Title};