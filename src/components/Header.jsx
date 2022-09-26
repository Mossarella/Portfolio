import React from "react";

function Header(props) {
  return (
    <header>
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
        <a href={props.link}>CONTACT</a>
      </li>
      <li>
        <a href={props.link}>MORE+</a>
      </li>

    </ul>
      </div>
    </header>
  );
}

export {Header};
