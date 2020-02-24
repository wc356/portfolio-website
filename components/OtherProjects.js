const OtherProjects = () => (
  <>
    <div className="projects--wrapper">
      <div id="title" className="card">
        <h1>Other Projects</h1>
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
      <div className="card">
        <h3>Project 1</h3>
        <p>Succint and to-the-point project description here.</p>
      </div>
    </div>
    <style jsx>
      {`
        .projects--wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 120px;
        }
        #title {
          background-color: #ffccd5;
        }
        .card {
          display: block;
          max-width: 160px;
          height: 250px;
          padding: 18px;
          border: solid 1px;
          margin-right: 6px;
          margin-bottom: 6px;
          border-radius: 5px;
        }
      `}
    </style>
  </>
);

export default OtherProjects;
