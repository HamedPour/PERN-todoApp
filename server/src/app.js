// packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

//  my imports
const config = require("./config/config");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes import
require("./routes")(app);

app.listen(config.port, () => {
  console.log("=======================================================");
  console.log("Sever started at port " + config.port);
});
