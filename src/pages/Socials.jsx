import React from "react";
import "./Socials.css";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function Socials(props) {
  return (
    <div className="socials-container">
      <section
        className="social-media-container"
        id={props.mode === "light" ? "" : "darkmode"}
      >
        <a
          href="https://github.com/PrathamSingla1204"
          target="_blank"
          className="github social-media-icons-border-radius"
        >
          <div className="github socials">
            <AiFillGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/pratham-singla/"
          target="_blank"
          className="linkedin social-media-icons-border-radius"
        >
          <div className="linkedin socials">
            <BiLogoLinkedin />
          </div>
        </a>
       
      </section>
    </div>
  );
}

export default Socials;
