import Card from "./Card";
import projects from "../database/projects";

// const values = Object.values(projects);
// const entries = Object.entries(projects);

const Projects = () => {
  const makeCard = () => {
    const keys = Object.keys(projects);
    return keys.map(item => (
      <Card
        id={item}
        key={item}
        quote={projects[item].quote}
        description={projects[item].description}
      />
    ));
  };

  return (
    <section className="layout">
      <h1 className="title">Selected Projects</h1>
      <ul>{makeCard()}</ul>
      <style jsx>
        {`
          .layout {
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
