import theme from "../styles/theme";
import ProfilePic from "../public/images/profile_pic.png";

const About = () => (
  <div className="main">
    <section className="img-wrapper">
      <div className="headshot">
        <img src={ProfilePic} alt="profile picture" />
      </div>
    </section>
    <section className="about-wrapper">
      <div className="about">
        <h1 className="title">Think, design, code.</h1>
        <p className="body">
          {`
Woo Young Choi is a Front-End Web Developer & UI/UX designer
based in New York, NY.

After graduating from Cornell University, he spent 1 year
working as a professional designer in Alexandria, VA and
is a certified LEED Green Associate. Woo currently resides
in Bergen County, NJ where he devotes most of his time
developing front-end and full-stack web applications, using
ReactJS as his preferred framework.
          `}
        </p>
      </div>
    </section>
    <style jsx>
      {`
        .main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 300px 100px;
        }
        .img-wrapper {
          display: flex;
          justify-content: center;
          text-align: center;
          width: 50%;
        }
        .headshot {
          display: block;
          overflow: hidden;
          width: 400px;
          height: 100%;
        }
        img {
          width: 80%;
        }
        .about-wrapper {
          display: flex;
          width: 50%;
        }
        .about {
          font-size: 18px;
          padding-left: 10px;
        }
        .title {
          font-size: 45px;
          font-weight: 300;
        }
        .body {
          font-size: 16px;
          line-height: 35px;
          white-space: pre;
        }
        @media screen and (max-width: 1024px) {
          .main {
            flex-direction: column;
            padding: 10rem 0;
          }
          .about {
            padding: 1rem 0;
          }
          .title {
            padding: 1.5rem 0;
          }
          .body {
            white-space: normal;
            padding: 1.5rem 0;
          }
        }
      `}
    </style>
  </div>
);

export default About;
