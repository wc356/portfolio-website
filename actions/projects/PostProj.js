import React from "react";
import theme from "../../styles/theme";
import Link from "next/link";
import { projects } from "../../database/projects";
import { v4 as uuidv4 } from "uuid";

export const PostProjLink = ({ project = "PROJECT TITLE", ongoing }) => (
  <>
    <Link href="/proj/[project]" as={`/proj/${project}`}>
      <a>{project}</a>
    </Link>

    <style jsx>
      {`
        a {
          display: inline-block;
          font-size: 25px;
          font-weight: 600;
          text-decoration: none;
          color: ${theme.colors.link};
        }
        a:hover {
          opacity: 1;
          text-shadow: 6px 6px ${theme.colors["pink-link"]};
        }
        a:visited {
          color: ${theme.colors.link};
        }
        a::after {
          content: '${ongoing ? "ongoing" : ""}';
          position: absolute;
          bottom: 95%;
          color: gray;
          font-weight: 300;
          font-size: .9rem;
          text-shadow: none;
        }
        a:hover::after {
          transition: all 0.15s;
        }
      `}
    </style>
  </>
);

export const PostProjImg = ({ project }) => (
  <>
    <Link href="/proj/[project]" as={`/proj/${project}`}>
      <div className="img--wrapper">
        {projects.map((obj) => {
          if (obj.project === project) {
            return (
              <img
                key={uuidv4()}
                src={obj.cover}
                alt={`picture of ${obj.project}`}
              />
            );
          }
        })}
        <div className="overlay">
          <p className="text">About Project</p>
        </div>
      </div>
    </Link>
    <style jsx>
      {`
        .img--wrapper {
          display: block;
          position: relative;
          align-items: center;
          text-align: center;
          box-shadow: 1px 1px 5px gray;
          border-radius: 5px;
        }
        .img--wrapper:hover .overlay {
          opacity: 0.8;
          box-shadow: 10px 10px ${theme.colors["pink-link"]};
          border-radius: 5px;
        }
        img {
          object-position: 50% 50%;
        }
        .overlay {
          position: absolute;
          cursor: pointer;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0;
          transition: 0.15s ease;
          background-color: white;
        }
        .text {
          color: ${theme.colors.link};
          font-size: 30px;
          font-weight: 500;
          position: absolute;
          top: 50%;
          left: 50%;
          letter-spacing: 1px;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
        }
        @media screen and (max-width: 1024px) {
          img {
            width: 100%;
            height: auto;
          }
        }
      `}
    </style>
  </>
);
