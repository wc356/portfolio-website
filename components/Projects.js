import Card from "./Card";
import { database } from "../data_storage/database";

// const values = Object.values(database);
// const entries = Object.entries(database);

const Projects = () => {
  const makeCard = () => {
    const keys = Object.keys(database);
    return keys.map(item => (
      <Card
        id={item}
        key={item}
        quote={database[item].quote}
        description={database[item].description}
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
