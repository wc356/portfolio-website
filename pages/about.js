import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className="body">
        <p className="placeholder">ABOUT PLACEHOLDER!</p>
      </div>
      <style jsx>
        {`
          .body {
            padding: 100px;
          }
          .placeholder {
            display: block;
            font-size: 50px;
            font-weight: 500;
            color: red;
          }
        `}
      </style>
    </Layout>
  );
};
