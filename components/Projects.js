import React from "react";

import Card from "./Card";
import { projects } from "../database/projects";

const Projects = () => {
  const Cards = () => {
    const keys = Object.keys(projects);
    return keys.map((item) => (
      <Card
        project={projects[item].project}
        key={item}
        quote={projects[item].quote}
        description={projects[item].description}
        ongoing={projects[item].ongoing}
      />
    ));
  };

  return (
    <section className="projects">
      <h1 className="title">Selected Projects</h1>
      <Cards />

      <style jsx>
        {`
          .projects {
            text-align: center;
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
