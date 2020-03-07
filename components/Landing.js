import theme from "../styles/theme";
import Link from "next/link";

const Landing = () => (
  <div className="main">
    <section>
      <h1 className="title">WOO YOUNG CHOI</h1>
      <p className="description">UI/UX & Front-end Developer</p>
    </section>
    <style jsx>
      {`
        .main {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
        }
        .title {
          font-family: Futura;
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
      `}
    </style>
  </div>
);

export default Landing;
