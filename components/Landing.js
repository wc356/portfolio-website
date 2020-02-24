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
          font-size: 70px;
          font-weight: 600;
          margin-bottom: 25px;
          text-shadow: 15px 15px #d9d9d9;
        }
        p {
          font-size: 23px;
          font-weight: 500;
          letter-spacing: 2px;
        }
      `}
    </style>
  </div>
);

export default Landing;
