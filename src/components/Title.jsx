import React,{forwardRef, useEffect} from "react";
import { Container } from "react-bootstrap";


const Title = forwardRef((props,ref)=>{









    return(
        <div  style={{ textAlign: props.align }} >
            <h1 className="title ">
            {props.titleText}
            <Container fluid className="underLine orange" ref={ref}>
        
            </Container>
            </h1>
        </div>
    )
});

export {Title};