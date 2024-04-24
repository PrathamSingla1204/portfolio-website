import React from "react";
import "./Skills.css";
import Projects from "./Projects";
import {
  BiLogoMongodb,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoAws,
  BiLogoDocker
} from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import {  FaNode, FaGitAlt } from "react-icons/fa6";
function Skills(props) {
  return (
    <div className="skills-container">
      <div className="skill-grid" id={props.mode==='light' ? '' : 'darkmode'}>
        <h1 className="skill-heading">My Tech Stack</h1>
        <span>
          <FaNode className="icons node-icon" />
          <p className="icon-name">NodeJs</p>
        </span>
        <span>
          <SiExpress className="icons express-icon" />
          <p className="icon-name">Express</p>
        </span>
        <span>
          <BiLogoReact className="icons react-icon" />
          <p className="icon-name">React</p>
        </span>
       
        <span>
          <BiLogoMongodb className="icons mongodb-icon" />
          <p className="icon-name">MongoDB</p>
        </span>
        <span>
          <BiLogoJavascript className="icons js-icon" />
          <p className="icon-name">Javascript</p>
        </span>
        <span>
          <BiLogoTypescript className="icons js-icon" />
          <p className="icon-name">Typescript</p>
        </span>
        <span>
          <FaGitAlt className="icons git-icon" />
          <p className="icon-name">Git</p>
        </span>
        <span>
          <BiLogoAws className="icons js-icon" />
          <p className="icon-name">AWS</p>
        </span>
        
        <span>
          <BiLogoDocker className="icons js-icon" />
          <p className="icon-name">Docker</p>
        </span>
        <span id="rest-api">
          <TbApi className="icons api-icon" />
          <p className="icon-name">RESTful API</p>
        </span>
      </div>
      <Projects mode={props.mode} />
    </div>
  );
}

export default Skills;
