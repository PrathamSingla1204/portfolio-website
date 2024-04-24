import "./Projects.css";
import medium from "../assets/images/medium.png";
import csv from "../assets/images/csv.png";
import sidwa from "../assets/images/sidwa.png";

export default function Projects(props) {
  console.log(props.mode);
  return (
    <>
      <div className="projects-container">
        <div
          className="project projects-1"
          id={props.mode === "light" ? "" : "darkmode"}
        >
          <img className="project-image" src={medium} alt="" />
          <h1
            className="project-name"
            id={props.mode === "light" ? "" : "darkmode"}
          >
            Medium Blogging App
          </h1>
          <h5 className="tech-stack">
            Tech stack used: Reactjs, NodeJs, Cloudflare workers, Postgres , Prisma
          </h5>
          <p className="project-description">
          Craft compelling posts, engage your audience, and build community effortlessly. With intuitive design and powerful features, start sharing your stories today!
          </p>
          <div className="button-container">
            <a href="https://github.com/PrathamSingla1204/blogging-app">
              <button className="button" id="github">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="project projects-2" id={props.mode==='light' ? '' : 'darkmode'}>
          <img className="project-image" src={csv} alt="" />
          <h1 className="project-name">CSV File Reader</h1>
          <h5 className="tech-stack">
            Tech stack used:  NodeJs, ExpressJs, MongoDB, Mongoose, EJS
          </h5>
          <p className="project-description">
          CSV Reader is a lightweight and user-friendly Node.js library that facilitates reading and parsing CSV (Comma-Separated Values) files effortlessly. This library aims to simplify the process of working with CSV data, allowing developers to focus on data analysis and manipulation.
          </p>
          <div className="button-container">
            <a href="https://github.com/PrathamSingla1204/CSV_Reader">
              <button className="button" id="github">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="project projects-3" id={props.mode==='light' ? '' : 'darkmode'}>
          <img className="project-image" src={sidwa} alt="" />
          <h1 className="project-name">Student Interview Management Application</h1>
          <h5 className="tech-stack">Tech stack used: NodeJs, ExpressJs, MongoDB, Mongoose, EJS</h5>
          <p className="project-description">
          This is a web application built to maintain a database of student interviews. The application allows employees to sign up and sign in, and provides various features to manage student details, interviews, and results.
          </p>
          <div className="button-container">
            <a href="https://github.com/PrathamSingla1204/Student_Interview_management">
              <button className="button" id="github">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
