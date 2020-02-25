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
    <section className="main">
      <div>
        <h1>Selected Projects</h1>
      </div>
      <ul>{makeCard()}</ul>
      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
          h1 {
            font-size: 45px;
            margin-bottom: 50px;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
