import theme from "../styles/theme";

const Landing = () => (
  <div className="main">
    <h1 className="title">WOO YOUNG CHOI</h1>
    <p className="description">UI/UX & Front-end Developer</p>
    <style jsx>
      {`
        .main {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
        }
        .title {
          font-family: Futura, Montserrat;
          font-size: 75px;
          font-weight: 600;
          margin-bottom: 25px;
          animation: text-drop 0.75s 1;
        }
        .description {
          font-size: 27px;
          font-weight: 500;
          letter-spacing: 2px;
          color: ${theme.colors.black};
        }
        @keyframes text-drop {
          0% {
            opacity: 0;
            margin-bottom: -200px;
          }
        }
        @media screen and (max-width: 1024px) {
          .main {
            flex-direction: column;
          }
          .description {
            font-size: 1em;
          }
        }
      `}
    </style>
  </div>
);

export default Landing;
