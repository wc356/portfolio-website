import React from "react";
import Card from "./Card";
import { projects } from "../database/projects";

const Projects = () => {
  const makeCard = () => {
    const keys = Object.keys(projects);
    return keys.map((item) => (
      <Card
        project={projects[item].project}
        key={item}
        quote={projects[item].quote}
        description={projects[item].description}
      />
    ));
  };
  return (
    <section className="projects">
      <h1 className="title">Selected Projects</h1>
      {makeCard()}
      <style jsx>
        {`
          .projects {
            text-align: center;
            background-color: green;
          }
          .title {
            font-size: 45px;
            margin-bottom: 50px;
            font-weight: 400;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
