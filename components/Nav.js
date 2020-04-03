import theme from "../styles/theme";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Nav = () => (
  <>
    <div className="wrapper">
      <div className="flex">
        <Link href="/">
          <a className="navlink">HOME</a>
        </Link>
        <Link href="/about">
          <a className="navlink navlink-B">ABOUT</a>
        </Link>
      </div>
    </div>
    <SocialLinks className="social" />

    <style jsx>
      {`
        .wrapper {
          display: block;
          position: fixed;
          top: 30vh;
          margin-left: 15px;
          z-index: 1;
        }
        .flex {
          display: flex;
          flex-direction: column;
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
          text-align: center;
          background-color: rgba(255, 255, 255, 0.5);
          padding: 5px;
          border-radius: 5px;
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
