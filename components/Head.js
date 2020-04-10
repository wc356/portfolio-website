import React from "react";

const Head = () => (
  <head>
    /* Global site tag (gtag.js) - Google Analytics */
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-163343549-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'UA-163343549-1');
    </script>
  </head>
);

export default Head;
