const Footer = () => (
  <footer className="footer">
    <div className="designed-by">
      <p>Designed & Built by Woo Young Choi</p>
    </div>
    <style jsx>{`
      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background-color: #000;
      }
      p {
        color: white;
      }
    `}</style>
  </footer>
);

export default Footer;
