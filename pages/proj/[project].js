import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import theme from "../../styles/theme";
import Layout from "../../components/Layout";
import { projects } from "../../database/projects";

export default () => {
  const router = useRouter();
  const title = router.query.project;

  const handleBody = () => {
    const body = projects.map((proj) => {
      if (proj.project === title) {
        return (
          <div key={uuidv4()}>
            <div className="body">
              <section className="overview">
                <h1>{Object.keys(proj.body[0])} 🗒</h1>
                <p className="indent">{Object.values(proj.body[0])}</p>
              </section>
              <section className="approach">
                <h1>{Object.keys(proj.body[1])} 💬</h1>
                <ol className="indent">
                  {proj.body[1]["APPROACH"].map((approach) => (
                    <li key={approach}>{approach}</li>
                  ))}
                </ol>
              </section>
              <section className="challenges">
                <h1>{Object.keys(proj.body[2])} ⚔️</h1>
                <ul className="indent">
                  {proj.body[2]["CHALLENGES"].map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </section>
              <section className="reflections">
                <h1>{Object.keys(proj.body[3])} 💭</h1>
                <p className="indent">{proj.body[3]["REFLECTIONS"][0]}</p>
                <p className="indent">{proj.body[3]["REFLECTIONS"][1]}</p>
                <p className="indent">{proj.body[3]["REFLECTIONS"][2]}</p>
              </section>
              <a
                onClick={() => {
                  window.history.back();
                }}
                className="navlink"
              >
                BACK
              </a>
            </div>

            <style jsx>
              {`
                h1 {
                  font-size: 25px;
                }
                .body {
                  white-space: pre-wrap;
                  overflow-wrap: break-word;
                  margin-top: 30px;
                }
                .navlink {
                  display: inline-block;
                  cursor: pointer;
                  padding: 10px;
                  font-size: 15px;
                  font-weight: 900;
                  text-decoration: none;
                  color: white;
                  background-color: ${theme.colors.link};
                  border-radius: 10px;
                  letter-spacing: 2px;
                  margin-top: 20px;
                }
                .navlink:hover {
                  opacity: 0.5;
                }
                .navlink:visited {
                  color: white;
                }
                span {
                  font-size: 30px;
                  font-weight: 400;
                  margin-right: 5px;
                }
                li {
                  list-style: initial;
                  margin-left: 20px;
                }
                .indent {
                  padding: 10px;
                  padding-left: 30px;
                }
                section {
                  margin-bottom: 30px;
                }
              `}
            </style>
          </div>
        );
      }
    });
    return body;
  };

  return (
    <Layout>
      <div className="layout">
        <div className="body-wrap">
          <div className="body">
            <h1 className="title">{title}</h1>
            {projects.map((proj) => {
              if (proj.project === title) {
                return (
                  <>
                    <div className="scroll-carousel">
                      <div className="imgs">
                        {proj.pictures.map((pic) => {
                          return (
                            <div className="flex">
                              <img
                                key={pic.path}
                                src={pic.path}
                                className="img"
                                height="375"
                                width="600"
                              />
                              <h3 className="caption">{pic.caption}</h3>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              }
            })}
            <div className="content">{handleBody()}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .layout {
          line-height: 1.5;
          min-height: 100vh;
        }
        .scroll-carousel {
          overflow: scroll;
          padding: 35px;
          padding-right: 5px;
          background-color: lightgray;
          box-shadow: inset 0 0 10px gray;
        }
        .imgs {
          display: inline-flex;
        }
        .flex {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .img {
          margin-right: 30px;
        }
        .caption {
          color: ${theme.colors.black};
          margin-top: 10px;
        }
        .title {
          display: block;
          text-align: center;
          font-size: 50px;
          font-weight: 500;
          padding: 50px;
        }
        .body-wrap {
          padding: 80px 150px;
          height: 100%;
          box-shadow: LightGray 0px 0px 10px 0px;
          background-color: ${theme.colors["pink-l"]};
          background-image: linear-gradient(
            0deg,
            ${theme.colors.dark} 0%,
            ${theme.colors["pink-link"]} 80%,
            white 100%
          );
        }
        .body {
          background: white;
          border-radius: 15px;
        }
        .content {
          padding: 60px;
        }
      `}</style>
    </Layout>
  );
};
