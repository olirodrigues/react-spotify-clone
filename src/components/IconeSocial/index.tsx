import React from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import "./styles.css";

const IconeSocial: React.FC = () => {
  return (
    <div className='container-redes'>
      <div>
        <a href='/'>
          <Instagram />
        </a>
      </div>
      <div>
        <a href='/'>
          <Twitter />
        </a>
      </div>
      <div>
        <a href='/'>
          <Facebook />
        </a>
      </div>
    </div>
  );
};

export default IconeSocial;
