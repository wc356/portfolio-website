import theme from "../styles/theme";
import { PostLink, PostImg } from "../actions/Post";
import { database } from "../data_storage/database";

const Card = ({ id, quote = "QUOTE", description = "DESCRIPTION HERE" }) => {
  const renderDatabase = () => {
    return (
      <ul className="tech-list">
        {database[id].technology.map(tech => (
          <li className="tech" key={tech}>
            {tech}
          </li>
        ))}
        <style jsx>
          {`
            .tech-list {
              display: inline-block;
            }
            .tech {
              display: inline-block;
              background-color: ${theme.colors.dark};
              border-radius: 0 10px 0 10px;
              color: white;
              font-weight: 400;
              margin-right: 10px;
              margin-bottom: 10px;
              padding: 8px;
            }
          `}
        </style>
      </ul>
    );
  };

  return (
    <li className="cards-container">
      <div className="card--img">
        <PostImg id={id} />
      </div>
      <div className="card--desc">
        <div className="text-wrapper">
          <div className="text">
            <PostLink id={id} />
            <h1 className="quote">{quote}</h1>
            <p>{description}</p>
            <div className="tech-wrapper">{renderDatabase()}</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cards-container {
            display: flex;
            padding: 35px 0px;
          }
          .card--img {
            display: block;
            border: 1px ${theme.colors.gray} solid;
            height: 350px;
            width: 55%;
            overflow: hidden;
            margin-left: 110px;
            transition: all 0.2s;
          }
          .card--img:hover {
            border: ${theme.colors.dark} 1px solid;
            transform: translateY(-8px);
          }
          .card--desc {
            display: block;
            height: 350px;
            width: 45%;
            margin-right: 50px;
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
            color: ${theme.colors.black};
            padding: 25px 15px 15px 15px;
          }
          .quote {
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
