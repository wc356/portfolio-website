import React, { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";
import MetaTags from "react-meta-tags";

import Nav from "./Nav";

const Layout = (props) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <MetaTags>
        <title>Woo Young Choi Portfolio 👨🏻‍💻</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Woo Young Choi" />
        <meta
          name="description"
          content="👨🏻‍💻 Woo Young Choi Front-end Developer Portfolio ☕️"
        />
        <meta
          name="keywords"
          content="JavaScript, HTML, CSS, SASS, SCSS, XML, React, ReactJS, Next, NextJS, software engineer, developer, software developer, front-end developer, front-end, full-stack engineer, web portfolio, developer portfolio, Woo Young Choi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <Nav />
      <div>{props.children}</div>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap");

          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          h1,
          h3,
          p,
          a,
          li,
          button {
            font-family: Montserrat;
          }
          a {
            transition: all 0.15s;
            text-decoration-skip-ink: auto;
            cursor: pointer;
          }
          a:hover {
            transform: translateY(-3px);
          }
          ul {
            list-style: none;
          }
          img {
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
