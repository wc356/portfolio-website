import React from "react";
import theme from "../styles/theme";

const OtherProjects = () => (
  <div className="background">
    <h1 className="title">Other Projects</h1>
    <div className="projects--wrapper">
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
    </div>

    <style jsx>
      {`
        .background {
          background-color: rgb(239, 239, 239);
        }
        .title {
          text-align: center;
          font-size: 45px;
          margin-bottom: 50px;
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
        .card {
          display: block;
          width: 180px;
          height: 250px;
          padding: 18px;
          border: solid 1px ${theme.colors.gray};
          margin-right: 15px;
          margin-bottom: 15px;
          border-radius: 5px;
          background-color: white;
        }
      `}
    </style>
  </div>
);

export default OtherProjects;
