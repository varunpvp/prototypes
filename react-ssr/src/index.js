import React from "react";
import ReactDOMServer from "react-dom/server";
import DatePicker from "antd/es/date-picker";

function App() {
  return (
    <div>
      Hello, there, here is datepicker <DatePicker />
    </div>
  );
}

const renderString = ReactDOMServer.renderToString(<App />);

console.log({ renderString });
