import theme from "../styles/theme";
import { useState } from "react";

const Contact = () => (
  <>
    <section className="contact">
      <div className="card">
        <h1 className="title">Any questions or comments?</h1>
        <p className="body">Send your inquiries below</p>
        <a
          className="btn"
          href="mailto:wychoi356@gmail.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Let's Talk!
        </a>
      </div>
    </section>
    <footer className="footer">
      <div>
        <p className="footer-body">Designed & Built by Woo Young Choi</p>
      </div>
    </footer>
    <style jsx>
      {`
        .contact {
          display: flex;
          margin-top: 20%;
          margin-bottom: 10%;
          padding-left: 18%;
        }
        .title {
          color: ${theme.colors["link"]};
          font-size: 30px;
          margin-bottom: 5px;
          text-shadow: -1px -1px ${theme.colors["pink-l"]},
            -2px -2px ${theme.colors["pink-l"]},
            -3px -3px ${theme.colors["pink-l"]},
            -4px -4px ${theme.colors["pink-l"]},
            -5px -5px ${theme.colors["pink-l"]},
            -6px -6px ${theme.colors["pink-l"]};
        }
        .body {
          color: ${theme.colors.black};
        }
        .btn {
          display: block;
          width: 15rem;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          padding: 15px;
          margin-top: 50px;
          border: none;
          background-color: ${theme.colors.dark};
          color: white;
          border-radius: 25px;
          letter-spacing: 1px;
          text-decoration: none;
        }
        .btn:hover {
          transform: scale(1.08);
          background-color: pink;
        }
        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
          background-color: ${theme.colors["pink-l"]};
          background-image: linear-gradient(
            0deg,
            ${theme.colors.dark} 0%,
            ${theme.colors["pink-link"]} 74%,
            white 100%
          );
          height: 25vh;
        }
        .footer-body {
          color: white;
          font-size: 18px;
        }
      `}
    </style>
  </>
);

export default Contact;
