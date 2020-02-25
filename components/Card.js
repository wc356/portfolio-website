import { PostLink, PostImg } from "../actions/Post";
import { database } from "../data_storage/database";

const Card = ({ id, quote = "QUOTE", description = "DESCRIPTION HERE" }) => {
  const renderDatabase = () => {
    return (
      <ul>
        {database[id].technology.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
        <style jsx>
          {`
            ul {
              display: inline-block;
              flex-direction: row;
              flex-wrap: wrap;
            }
            li {
              display: inline-block;
              padding: 8px;
              margin-right: 10px;
              margin-bottom: 10px;
              color: black;
              border: 3px solid #65b2d8;
              border-radius: 9px;
            }
          `}
        </style>
      </ul>
    );
  };

  return (
    <li className="wrapper">
      <div className="card">
        <PostImg id={id} />
      </div>
      <div className="card card--desc">
        <div className="text-wrapper">
          <div className="text">
            <PostLink id={id} />
            <h1>{quote}</h1>
            <p>{description}</p>
            <div className="tech-wrapper">{renderDatabase()}</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            padding: 35px 0px;
          }
          .card {
            display: block;
            height: 350px;
            overflow: hidden;
            width: 55%;
            border: 1px solid gray;
            margin-left: 110px;
          }
          .card--desc {
            margin-left: 0;
            width: 45%;
            border: none;
            text-align: center;
          }
          .text-wrapper {
            align-items: center;
            height: 100%;
          }
          .text {
            position: relative;
            white-space: pre-line;
            height: 100%;
          }
          .tech-wrapper {
            display: block;
            position: absolute;
            bottom: 0;
            padding: 0 40px;
            width: 100%;
            margin: -10px 0;
          }
          h1 {
            margin-bottom: 20px;
            margin-top: 10px;
          }
        `}
      </style>
    </li>
  );
};

export default Card;
