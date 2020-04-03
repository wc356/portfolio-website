import React from "react";
import { useRouter } from "next/router";

import theme from "../../styles/theme";
import Layout from "../../components/Layout";
import projects from "../../database/projects";
import { v4 as uuidv4 } from "uuid";

export default () => {
  const router = useRouter();
  const title = router.query.project;

  const handleBody = () => {
    const body = projects.map(proj => {
      if (proj.project === title) {
        return (
          <div key={uuidv4()}>
            <div className="img">
              <img src={proj.picPath} height="350" width="600" />
            </div>
            <div className="body">
              <section className="overview">
                <h1>{Object.keys(proj.body[0])} 🗒</h1>
                <p className="indent">{Object.values(proj.body[0])}</p>
              </section>
              <section className="approach">
                <h1>{Object.keys(proj.body[1])} 💬</h1>
                <ol className="indent" type="1">
                  <li>{proj.body[1]["APPROACH"][0]}</li>
                  <li>{proj.body[1]["APPROACH"][3]}</li>
                  <li>{proj.body[1]["APPROACH"][1]}</li>
                  <li>{proj.body[1]["APPROACH"][4]}</li>
                  <li>{proj.body[1]["APPROACH"][2]}</li>
                </ol>
              </section>
              <section className="challenges">
                <h1>{Object.keys(proj.body[2])} ⚔️</h1>
                <ul className="indent">
                  <li>{proj.body[2]["CHALLENGES"][0]}</li>
                  <li>{proj.body[2]["CHALLENGES"][1]}</li>
                  <li>{proj.body[2]["CHALLENGES"][2]}</li>
                  <li>{proj.body[2]["CHALLENGES"][3]}</li>
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
                .img {
                  display: flex;
                  margin: 40px 0;
                  justify-content: center;
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
                .h1 {
                  color: ${theme.colors.black};
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
            {handleBody()}
          </div>
        </div>
      </div>

      <style jsx>{`
        h1 {
          font-size: 34px;
          font-weight: 600;
          padding: 10px;
        }
        .layout {
          line-height: 1.5;
          min-height: 100vh;
        }
        .title {
          display: block;
          text-align: center;
          font-size: 50px;
          font-weight: 300;
        }
        .body-wrap {
          padding: 80px 150px;
          height: 100%;
          box-shadow: LightGray 0px 0px 10px 0px;
          background-color: ${theme.colors.dark};
        }
        .body {
          background: white;
          padding: 60px;
          border-radius: 15px;
        }
      `}</style>
    </Layout>
  );
};
