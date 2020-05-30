import theme from "../styles/theme";

const Landing = () => (
  <div className="flex-container">
    <div className="title">
      <h1 className="title__name">WOO YOUNG CHOI</h1>
      <p className="title__description">UI/UX & Front-end Developer</p>
    </div>
    <span></span>
    <style jsx>
      {`
        .flex-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
        }

        .title .title__name {
          font-family: Futura, Montserrat;
          font-size: 4.6rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          animation: text-drop 0.75s 1;
        }

        .title .title__description {
          font-size: 1.7rem;
          font-weight: 500;
          letter-spacing: 2px;
          color: ${theme.colors.black};
        }

        span {
          position: absolute;
          margin-top: 25rem;
          display: inline-block;
          width: 3.5rem;
          height: 3.5rem;
          border-left: 3px solid gray;
          border-bottom: 3px solid gray;
          transform: rotate(-45deg);
          animation: arrow-down 1.5s infinite;
        }

        @keyframes text-drop {
          0% {
            opacity: 0;
            margin-bottom: -200px;
          }
        }

        @keyframes arrow-down {
          0% {
            transform: rotate(-45deg) translate(0, 0);
          }
          20% {
            transform: rotate(-45deg) translate(-1.5rem, 1.5rem);
          }
          40% {
            transform: rotate(-45deg) translate(0, 0);
          }
        }

        @media only screen and (max-width: 1024px) {
          .flex-container {
            flex-direction: column;
          }
          .title .title__name {
            font-size: 3.5rem;
          }

          .title .title__description {
            font-size: 1rem;
          }
        }
      `}
    </style>
  </div>
);

export default Landing;
