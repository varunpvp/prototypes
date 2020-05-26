import React from "react";
import ReactDOMServer from "react-dom/server";
import "antd/dist/antd.css";

function App() {
  return <div>Hello, there</div>;
}

const renderString = ReactDOMServer.renderToString(<App />);
console.log({ renderString });
