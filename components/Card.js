import theme from "../styles/theme";
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
            }
            li {
              display: inline-block;
              padding: 8px;
              margin-right: 10px;
              margin-bottom: 10px;
              font-weight: 400;
              color: white;
              background-color: ${theme.colors.dark};
              border-radius: 0 10px 0 10px;
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
            margin-left: 110px;
          }
          .card--desc {
            border: ${theme.colors.border} 1px solid;
            margin-left: 0;
            margin-right: 50px;
            width: 45%;
            border-radius: 0 0 25px 0;
            text-align: center;
          }
          .text-wrapper {
            align-items: center;
            height: 100%;
          }
          .text {
            color: ${theme.colors.black};
            padding: 25px 15px 15px 15px;
            position: relative;
            white-space: pre-line;
            height: 100%;
          }
          h1 {
            font-weight: 400;
            margin-bottom: 10px;
            margin-top: 25px;
          }
          .tech-wrapper {
            display: block;
            position: absolute;
            padding: 0 40px;
            width: 100%;
            bottom: 20px;
          }
        `}
      </style>
    </li>
  );
};

export default Card;
