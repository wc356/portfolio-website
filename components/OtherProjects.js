import React from "react";

import OtherProject from "./OtherProject";
import { otherProjects as sideProjects } from "../database/projects";

const OtherProjects = () => (
  <div className="background">
    <h1 className="title">Other Projects</h1>
    <div className="projects--wrapper">
      {sideProjects.map(({ project: proj }) => {
        return <OtherProject key={proj} project={proj} />;
      })}
    </div>

    <style jsx>
      {`
        .background {
          background-color: rgb(239, 239, 239);
          padding: 80px 0;
        }
        .title {
          text-align: center;
          font-size: 45px;
          margin-bottom: 80px;
          font-weight: 400;
        }
        .projects--wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 0 200px;
        }
      `}
    </style>
  </div>
);

export default OtherProjects;
