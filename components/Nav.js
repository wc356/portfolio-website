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
        <a className="navlink navlink-B">ABOUT</a>
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
          top: 40vh;
          z-index: 1;
        }
        .navlink {
          display: block;
          padding: 10px 0;
          font-size: 15px;
          font-weight: 900;
          text-decoration: none;
          margin: 60px 0;
          transform: rotate(-90deg);
          letter-spacing: 5px;
        }
        .navlink:hover {
          transform: rotate(-90deg);
          opacity: 1;
          text-shadow: 15px 15px ${theme.colors.dark};
        }
        .navlink:visited {
          color: black;
        }
        .navlink-B:hover {
          text-shadow: -15px 15px ${theme.colors.dark};
        }
      `}
    </style>
  </>
);

export default Nav;
