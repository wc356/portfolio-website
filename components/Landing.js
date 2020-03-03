import theme from "../styles/theme";
import Link from "next/link";

const Landing = () => (
  <div className="main">
    <section>
      <h1>WOO YOUNG CHOI</h1>
      <p>UI/UX & Front-end Developer</p>
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
        h1 {
          font-family: Futura;
          font-size: 80px;
          font-weight: 600;
          margin-bottom: 25px;
          color: black;
        }
        p {
          font-size: 27px;
          font-weight: 500;
          letter-spacing: 2px;
          color: ${theme.colors.black};
        }
      `}
    </style>
  </div>
);

export default Landing;
