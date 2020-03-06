import theme from "../styles/theme";

const Contact = () => (
  <>
    <section className="contact">
      <div>
        <h1 className="title">Any questions or comments?</h1>
        <p className="body">Send your inquiries below</p>
        <button className="btn">Let's talk!</button>
      </div>
    </section>
    <style jsx>
      {`
        .contact {
          display: flex;
          margin-top: 25%;
          margin-bottom: 20%;
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
          font-size: 15px;
          padding: 10px;
          margin-top: 50px;
        }
      `}
    </style>
  </>
);

export default Contact;
