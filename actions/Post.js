import theme from "../styles/theme";
import ExpensifyPic from "../public/images/expensify.png";
import Link from "next/link";

export const PostLink = ({ id = "PROJECT TITLE" }) => (
  <>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a className="title">{id}</a>
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
          text-shadow: 4px 4px rgba(255, 153, 204, 0.7);
        }
        a:visited {
          color: ${theme.colors.dark};
        }
      `}
    </style>
  </>
);

export const PostImg = ({ id }) => (
  <>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <div className="img--wrapper">
        <img src={ExpensifyPic} alt="picture of project Expensify" />
        <div className="overlay">
          <p className="text">SHOW PROJECT</p>
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
          background-color: ${theme.colors.dark};
        }
        .img--wrapper:hover .overlay {
          opacity: 0.6;
        }
        .text {
          color: white;
          font-size: 30px;
          font-weight: 500;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
        }
      `}
    </style>
  </>
);
