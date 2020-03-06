import theme from "../styles/theme";
import ProfilePic from "../public/images/profile_pic.png";

const About = () => (
  <div className="main">
    <section className="img-wrapper">
      <div className="headshot">
        <img src={ProfilePic} alt="profile picture" />
        <div className="box-shadow"></div>
      </div>
    </section>
    <section className="about-wrapper">
      <div className="about">
        <h1 className="title">Think, design, code.</h1>
        <p className="body">
          {`
Woo Young Choi is an upcoming UI/UX Designer & Front-End
Web Developer based in New York, NY.

He has 1 year of professional experience working as a
designer in Alexandria, VA and is a certified LEED Green
Associate. Woo currently resides in Cliffside Park, NJ,
where he devotes most of his time developing full-stack
web applications and front-end websites using ReactJS
as his preferred method.
          `}
        </p>
      </div>
    </section>
    <style jsx>
      {`
        .main {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 300px 100px;
        }
        .img-wrapper {
          display: flex;
          justify-content: center;
          width: 50%;
        }
        .headshot {
          display: block;
          height: 400px;
          min-width: 400px;
          overflow: hidden;
          position: relative;
          text-align: center;
        }
        img {
          height: 100%;
          max-width: 75%;
          object-fit: cover;
          object-position: 50% 50%;
          width: 450px;
        }
        .box-shadow {
          position: absolute;
          z-index: 3;
          margin-left: 100px;
          height: 800px;
          width: 850px;
          box-shadow: 10px 10px rgba(255, 153, 204, 0.7);
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
      `}
    </style>
  </div>
);

export default About;
