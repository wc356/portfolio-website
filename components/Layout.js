import Nav from "./Nav";

const Layout = props => {
  return (
    <div>
      <Nav />
      <div className="layout">{props.children}</div>
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
          li {
            list-style: none;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
