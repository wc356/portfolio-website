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
