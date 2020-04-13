import React from "react";
import { v4 as uuidv4 } from "uuid";

import resume from "../database/resume";

const Resume = () => {
  const values = Object.values(resume);

  const renderExperience = (expType) => {
    const renderifLocationExist = (exp) =>
      exp.location ? (
        <>
          , <span>{exp.location}</span>
          <style jsx>
            {`
              span {
                color: gray;
                font-weight: 500;
              }
            `}
          </style>
        </>
      ) : (
        ""
      );

    const renderGithubLink = (exp, expType) => {
      switch (expType) {
        case "professional":
          return "";
        case "project":
          return (
            <>
              -{" "}
              <a
                href={exp.link[1]}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {exp.link[0]}
              </a>
              <style jsx>
                {`
                  a {
                    display: inline-block;
                    font-size: 17px;
                    text-decoration: none;
                    position: relative;
                    transition: all 0.15s;
                  }
                  a::after {
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    background: ${values[9].highlight};
                    content: "";
                    bottom: 0;
                    /* animation */
                    -o-transition: 0.15s;
                    -ms-transition: 0.15s;
                    -moz-transition: 0.15s;
                    -webkit-transition: 0.15s;
                    transition: 0.15s;
                  }
                  a:hover::after {
                    width: 20%;
                    background: red;
                  }
                  a:visited {
                    color: black;
                  }
                  @media print {
                    a[href]::before {
                      display: inline-block;
                      color: gray;
                      font-size: 15px;
                      font-weight: 500;
                      content: "(" attr(href) ")";
                      white-space: nowrap;
                    }
                  }
                `}
              </style>
            </>
          );
      }
    };

    return (
      <>
        <h3>{expType.toUpperCase()} EXPERIENCE</h3>
        {values[3][expType].map((exp) => {
          return (
            <div key={uuidv4()} className="project">
              <h2 className="project-header">
                {exp.title}
                {renderifLocationExist(exp)} {renderGithubLink(exp, expType)}
              </h2>
              <p>{exp.subTitle}</p>
              <ul>
                {exp.description.map((desc) => (
                  <li key={uuidv4()}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
        <style jsx>
          {`
            h3 {
              color: ${values[9].highlight};
            }
            h2 {
              font-size: 20px;
            }
            ul {
              margin-left: 15px;
            }
            li {
              padding: 5px;
              color: ${values[9].body};
            }
            span {
              font-size: 17px;
              color: gray;
            }
            .project {
              margin: 10px;
            }
          `}
        </style>
      </>
    );
  };

  const renderEducation = () => (
    <>
      <h3 className="highlight">EDUCATION</h3>
      <div className="education">
        <h2>
          {values[2].school + " "}
          <span>{values[2].location}</span>
        </h2>
        <p>{values[2].subTitle}</p>
        <ul>
          {values[2].description.map((desc) => (
            <li key={uuidv4()}>{desc}</li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          .highlight {
            color: ${values[9].highlight};
          }
          span {
            color: gray;
            font-weight: 500;
          }
          ul {
            margin-left: 15px;
          }
          li {
            color: ${values[9].body};
          }
          h2 {
            font-size: 20px;
          }
          .education {
            margin: 10px 10px 0 10px;
          }
        `}
      </style>
    </>
  );

  return (
    <>
      <div className="background">
        <div className="page">
          <div className="btn-wrapper">
            <a className="btn-download" href={values[10][1]} target="_blank">
              {values[10][0]}
            </a>
          </div>
          <div className="page-content">
            <section className="left-column">
              <div className="name">
                <h1>{values[0]}</h1>
              </div>
              <div className="professional-exp">
                {renderExperience("professional")}
              </div>
              <div className="project-exp">{renderExperience("project")}</div>
              <div className="education">{renderEducation()}</div>
            </section>
            <section className="right-column">
              <div className="contact">
                <div>
                  <ul>
                    {values[1].links.map((link) => (
                      <li key={uuidv4()} className="hover">
                        <a
                          href={link[1]}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          {link[0]}
                        </a>
                      </li>
                    ))}
                    {values[1].notLinks.map((notLink) => (
                      <p key={uuidv4()}>{notLink}</p>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="technology subsection">
                <h3 className="title">TECHNOLOGY</h3>
                <ul>
                  {values[4].map((tech) => (
                    <li key={uuidv4()}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="honors subsection">
                <h3 className="title">HONORS</h3>
                <p>{values[5].title}</p>
                <p>{values[5].description}</p>
              </div>
              <div className="languages subsection">
                <h3 className="title">LANGUAGES</h3>
                <ul>
                  {values[6].map((lang) => (
                    <li key={uuidv4()}>{lang}</li>
                  ))}
                </ul>
              </div>
              <div className="interests subsection">
                <h3 className="title">INTERESTS</h3>
                <ul>
                  {values[7].map((int) => (
                    <li key={uuidv4()}>{int}</li>
                  ))}
                </ul>
              </div>
              <div className="hobbies subsection">
                <h3 className="title">HOBBIES</h3>
                <ul>
                  {values[8].map((hobby) => (
                    <li key={uuidv4()}>{hobby}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h3 {
            color: ${values[9].highlight};
          }
          a {
            color: ${values[9].highlight};
            text-decoration: none;
            font-weight: 500;
          }
          li, p {
            color: ${values[9].body};
          }
          span {
            color: gray;
            font-size: 20px;
          }
          .background {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 6rem;
          }
          .btn-wrapper {
            position: sticky;
            position: -webkit-sticky;
            top: 4rem;
          }
          .btn-download {
            display: inline-block;
            position: relative;
            left: -10rem;
            white-space: nowrap;
            color: white;
            background-color: ${values[9].highlight};
            padding: .5rem;
            border-radius: 0 .7rem 0 .7rem;
            box-shadow: ${values[9].highlight} 0 0 10px 0;
          }
          .btn-download:hover {
            background-color: pink;
          }
          .page {
            display: flex;
            zoom: 0.75;
            -moz-transform: scale(0.85);
            flex-direction: column;
            border-top: 7px solid ${values[9].highlight};
            border-bottom: 7px solid ${values[9].highlight};
            padding: 4.3rem;
            padding-top: 1.53rem;
            max-width: 1000px;
            line-height: 1.8;
            border-left: 1px solid ${values[9].border};
            box-shadow 10px 10px 10px ${values[9].shadow};
            height: 100%;
          }
          .name {
            display: block;
            font-size: 2.6rem;
            padding-top: 1rem;
            white-space: nowrap;
          }
          .professional-exp {
            padding-top: 4rem;
          }
          .page-content {
            display: flex;
            height: 100%;
          }
          .left-column {
            display: flex;
            min-height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
          }
          .right-column {
            display: flex;
            min-height: 100%;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact {
            font-size: 14px;
            margin: 9px 0 20px 15px;
            white-space: nowrap;
          }
          a {
            display: block;
            transition: all 0.15s;
          }
          a:hover {
            transform: translateY(-3px);
          }
          .subsection {
            padding: 15px;
          }
          .title {
            margin-bottom: 10px;
          }
          @media only screen and (max-width: 900px) {
            .background {
              padding: 0;
            }
            .page {
              padding: 1.2rem;
            }
            .page-content {
              flex-direction: column;
            }
            .btn-wrapper {
              display: flex;
              justify-content: flex-end;
            }
            .btn-download {
              position: static;
            }
            .name {
              padding: 2rem 0;
            }
            .professional-exp {
              padding: 0;
            }
          }
          @media only screen and (max-width: 376px) {
            .name {
              font-size: 1.65rem;
            }
          }
          @media print {
            .btn-wrapper {
              display: none;
            }
            .background {
              padding: 0;
            }
            .page {
              border-left: none;
              box-shadow: none;
              line-height: 1.5;
            }
            .professional-exp {
              padding-top: 48px;
            }
            .subsection {
              padding: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Resume;
