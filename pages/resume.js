import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Resume from "../components/Resume";

export default () => {
  return (
    <Layout>
      <div className="body">
        <Resume />
      </div>
      <style jsx>
        {`
          .body {
            padding: 100px;
          }
        `}
      </style>
    </Layout>
  );
};
