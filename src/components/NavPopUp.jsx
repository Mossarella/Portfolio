import React,{useEffect} from "react";


function NavPopUp(props){

useEffect(() => {

    document.documentElement.style.overflowY="hidden";
    return () => {

        document.documentElement.style.overflowY="auto";

    };
}, []);




    return(
        <div className="popUp" >
            <button onClick={props.onPopUpClose}>Close</button>
        </div>
    )
}

export {NavPopUp};