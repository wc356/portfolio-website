import React from "react";
import { v4 as uuidv4 } from "uuid";
import resume from "../database/resume";

const Resume = () => {
  const values = Object.values(resume);
  console.log(values);

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
    <div className="background">
      <div className="page">
        <div className="bottom-layout">
          <section className="MAIN left-column">
            <div className="name">
              <h1>{values[0]}</h1>
            </div>
            <div className="professional-exp">
              {renderExperience("professional")}
            </div>
            <div className="project-exp">{renderExperience("project")}</div>
            <div className="education">{renderEducation()}</div>
          </section>
          <section className=" SPECS right-column">
            <div className="contact">
              <div className="contact-isLink">
                <ul>
                  {values[1].links.map((link) => (
                    <li key={uuidv4()} className="hover">
                      <a href={link}>{link}</a>
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
            justify-content: center;
          }
          .page {
            display: flex;
            flex-direction: column;
            border-top: 7px solid ${values[9].highlight};
            border-bottom: 7px solid ${values[9].highlight};
            padding: 70px;
            width: 990px;
            line-height: 1.8;
            border-left: 1px solid ${values[9].border};
            box-shadow 10px 10px 10px ${values[9].shadow};
          }
          .name {
            display: block;
            font-size: 43px;
            white-space: nowrap;
          }
          .professional-exp {
            padding-top: 53px;
          }
          .bottom-layout {
            display: flex;
            height: 100%;
          }
          .MAIN {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            flex: 3;
          }
          .SPECS {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            flex: 1;
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
        `}
      </style>
    </div>
  );
};

export default Resume;
