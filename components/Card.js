import theme from "../styles/theme";
import { PostProjLink, PostProjImg } from "../actions/projects/PostProj";
import { projects } from "../database/projects";
import { v4 as uuidv4 } from "uuid";

const Card = ({
  project,
  quote = "QUOTE",
  description = "DESCRIPTION HERE",
}) => {
  const renderProjects = () => {
    const techTree = projects.map((proj) => {
      if (proj.project === project) {
        return (
          <ul className="tech-list" key={uuidv4()}>
            {proj.technology.map((tech) => (
              <li className="tech" key={uuidv4()}>
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
                  box-shadow: 13px 13px rgba(255, 153, 204, 0.3);
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
      }
    });
    return techTree;
  };

  return (
    <li className="cards-container">
      <div className="card--img">
        <PostProjImg project={project} />
      </div>
      <div className="card--desc">
        <div className="text-wrapper">
          <div className="text">
            <PostProjLink project={project} />
            <h1 className="quote">{quote}</h1>
            <p>{description}</p>
            <div className="tech-wrapper">{renderProjects()}</div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .cards-container {
            display: flex;
            padding: 35px 0px;
            justify-content: space-around;
            align-items: center;
          }
          .card--img {
            display: block;
            margin-left: 110px;
            transition: all 0.15s;
            padding: 10px;
          }
          .card--img:hover {
            transform: translateX(-10px) translateY(-10px);
          }
          .card--desc {
            display: block;
            height: 350px;
            margin-right: 50px;
            text-align: center;
            background-color: white;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 40%;
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
            padding: 0 15px 15px 15px;
          }
          .quote {
            font-size: 30px;
            font-weight: 400;
            margin-bottom: 10px;
            margin-top: 25px;
          }
          .tech-wrapper {
            display: block;
            position: absolute;
            padding: 0 40px;
            width: 100%;
            bottom: 0px;
          }
        `}
      </style>
    </li>
  );
};

export default Card;
