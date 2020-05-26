import React from "react";
import ReactDOMServer from "react-dom/server";
import DatePicker from "antd/es/date-picker";

// const fs = require("fs");

function App() {
  return (
    <div>
      Hello, there, here is datepicker <DatePicker />
    </div>
  );
}

const renderString = ReactDOMServer.renderToString(<App />);

// const template = fs.readFileSync("./index.html", "utf8");

console.log({ renderString });
