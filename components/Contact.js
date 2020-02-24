const Contact = () => (
  <>
    <section className="contact">
      <div className="contact--details">
        <h1>Contact</h1>
        <p>
          Have any questions? Let's talk! I am always open for new opportunities
          and friendships!
        </p>
      </div>
      <button className="btn">CALL TO ACTION</button>
    </section>
    <style jsx>
      {`
        .contact {
          display: block;
          text-align: center;
          margin-top: 230px;
          margin-bottom: 200px;
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
