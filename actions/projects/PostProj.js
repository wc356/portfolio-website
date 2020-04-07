import theme from "../../styles/theme";
import Link from "next/link";
import { projects } from "../../database/projects";

export const PostProjLink = ({ project = "PROJECT TITLE" }) => (
  <>
    <Link href="/proj/[project]" as={`/proj/${project}`}>
      <a className="title">{project}</a>
    </Link>

    <style jsx>
      {`
        .title {
          font-size: 25px;
          font-weight: 600;
          text-decoration: none;
          color: ${theme.colors.dark};
        }
        .title:hover {
          opacity: 1;
          text-shadow: 6px 6px ${theme.colors["pink-link"]};
        }
        a:visited {
          color: ${theme.colors.dark};
        }
      `}
    </style>
  </>
);

// Loop over each ProjectObject in Database
// if ProjectObject.project === this.prop.project, then grab——project.pictures[0].path;

export const PostProjImg = ({ project }) => (
  <>
    <Link href="/proj/[project]" as={`/proj/${project}`}>
      <div className="img--wrapper">
        {projects.map((obj) => {
          if (obj.project === project) {
            return <img src={obj.cover} alt={`picture of ${obj.project}`} />;
          }
        })}
        <div className="overlay">
          <p className="text">See Project</p>
        </div>
      </div>
    </Link>

    <style jsx>
      {`
        .img--wrapper {
          display: block;
          position: relative;
          align-items: center;
          text-align: center;
          box-shadow: 1px 1px 5px gray;
          border-radius: 5px;
        }
        .img--wrapper:hover .overlay {
          opacity: 0.8;
          box-shadow: 10px 10px ${theme.colors["pink-link"]};
          border-radius: 5px;
        }
        img {
          object-position: 50% 50%;
        }
        .overlay {
          position: absolute;
          cursor: pointer;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0;
          transition: 0.3s ease;
          background-color: white;
        }
        .text {
          color: ${theme.colors.link};
          font-size: 30px;
          font-weight: 500;
          position: absolute;
          top: 50%;
          left: 50%;
          letter-spacing: 1px;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
        }
      `}
    </style>
  </>
);
