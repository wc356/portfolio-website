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
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          color: ${theme.colors.light};
        }
        a:visited {
          color: ${theme.colors.light};
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
      `}
    </style>
  </>
);
