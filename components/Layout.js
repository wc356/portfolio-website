import Nav from "./Nav";

const Layout = props => {
  return (
    <div>
      <Nav />
      <div className="layout">{props.children}</div>
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
      </style>
      <style jsx global>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          h1,
          p,
          a,
          li {
            font-family: Montserrat;
          }
          a {
            transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
          }
          a:hover {
            transform: translateY(-3px);
            opacity: 0.5;
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
