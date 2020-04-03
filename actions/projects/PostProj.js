import theme from "../../styles/theme";
import Link from "next/link";
import ExpensifyPic from "../../public/images/expensify.png";

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

export const PostProjImg = ({ project }) => (
  <>
    <Link href="/proj/[project]" as={`/proj/${project}`}>
      <div className="img--wrapper">
        <img src={ExpensifyPic} alt="picture of project Expensify" />
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
        }
        img {
          width: 100%;
          object-fit: cover;
          height: 348px;
          object-position: 50% 50%;
        }
        .overlay {
          position: absolute;
          cursor: pointer;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.3s ease;
          background-color: white;
        }
        .img--wrapper:hover .overlay {
          opacity: 0.6;
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
