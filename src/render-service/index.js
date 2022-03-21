const express = require("express");
const { renderServicePort } = require("../../config");

const app = express();

app.use(express.static("./src/render-service/public"));

app.listen(renderServicePort, () =>
  console.log(`Server started on port ${renderServicePort}`)
);
