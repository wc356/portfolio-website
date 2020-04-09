import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import theme from "../styles/theme";

import { otherProjects } from "../database/projects";

const OtherProject = ({ project }) => {
  const [link, setLink] = useState("");

  return (
    <a
      className="card"
      href={link}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <h3>{project}</h3>
      <div className="body">
        <ul className="list">
          {otherProjects.map((proj) => {
            if (proj.project === project) {
              useEffect(() => {
                setLink(proj.link);
              }, [link]);
              return proj.description.map((item) => (
                <li key={uuidv4()} className="list-item">
                  {item}
                </li>
              ));
            }
          })}
        </ul>
      </div>

      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          .card {
            display: block;
            width: 180px;
            height: 250px;
            padding: 18px;
            border: solid 1px ${theme.colors.gray};
            margin-right: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
            background-color: ${theme.colors.dark};
            color: white;
          }
          .card:hover {
            color: ${theme.colors.dark};
            background-color: white;
            transform: translateY(-6px);
          }
          .card:hover .list-item {
            color: white;
            background-color: ${theme.colors.dark};
            transform: translateY(-6px);
            box-shadow: 6px 6px ${theme.colors.gray};
          }
          .body {
            display: flex;
            height: 100%;
            align-items: flex-end;
            text-align: right;
            padding-bottom: 18px;
          }
          .list {
            display: flex-box;
            width: 100%;
            transition: all 0.15s;
          }
          .list-item {
            display: inline-block;
            background-color: white;
            box-shadow: 6px 6px rgb(255, 153, 204);
            border-radius: 0 10px 0 10px;
            color: ${theme.colors.dark};
            font-weight: 400;
            margin-right: 10px;
            margin-bottom: 10px;
            padding: 5px;
          }
        `}
      </style>
    </a>
  );
};

export default OtherProject;
