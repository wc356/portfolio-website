import ProfilePic from "../public/images/profile_pic.png";

const About = () => (
  <div className="main">
    <section className="img-wrapper">
      <div className="img">
        <img src={ProfilePic} alt="profile picture" />
      </div>
    </section>
    <section className="about-wrapper">
      <div className="about">
        <h1>Think, design, code.</h1>
        <p>
          Woo Young Choi is an upcoming UI/UX Designer & Front-End Web Developer
          based in New York, NY. Throughout his studio-based design education in
          Cornell University, Woo embraced the sublime notion of “simplicity”
          and continues to explore its integration with two core web
          mediums—design and code. He has 1 year of professional experience
          working as a designer in Alexandria, VA and is a certified LEED Green
          Associate. Woo currently resides in Cliffside Park, NJ, where he
          devotes most of his time developing Full-stack Web Applications and
          Front-end Websites using ReactJS as his preferred method.
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
          overflow: hidden;
          width: 50%;
        }
        .img {
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

        .about-wrapper {
          display: flex;
          width: 50%;
        }
        .about {
          font-size: 18px;
          padding-left: 10px;
        }
        h1 {
          font-family: Montserrat;
          font-size: 45px;
          text-align: left;
          margin-bottom: 30px;
        }
        p {
          font-family: Montserrat;
          font-size: 16px;
          line-height: 35px;
          padding-right: 60px;
        }
      `}
    </style>
  </div>
);

export default About;
