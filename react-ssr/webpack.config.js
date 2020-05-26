const path = require("path");

const config = (env, argv) => {
  return {
    mode: "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
  };
};

module.exports = config;
