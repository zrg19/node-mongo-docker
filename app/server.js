const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

require('./startup/routes')(app)
require('./startup/db');

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
