import theme from "../styles/theme";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Nav = () => (
  <>
    <div className="wrapper">
      <Link href="/">
        <a className="navlink">HOME</a>
      </Link>
      <Link href="/about">
        <a className="navlink">ABOUT</a>
      </Link>
    </div>
    <SocialLinks className="social" />
    <style jsx>
      {`
        .wrapper {
          display: flex;
          flex-direction: column;
          height: 100px;
          justify-content: center;
          margin-left: 15px;
          position: fixed;
          text-align: center;
          top: 45vh;
          z-index: 1;
        }
        .navlink {
          font-size: 15px;
          font-weight: 900;
          text-decoration: none;
          margin: 70px 0;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          color: ${theme.colors.link};
        }
        .navlink:visited {
          color: ${theme.colors.link};
        }
        .navlink:hover {
          color: ${theme.colors.light};
        }
      `}
    </style>
  </>
);

export default Nav;
