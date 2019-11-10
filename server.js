const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(require("./routes/profiles"));

if (app.get("env") === "development") {
  ////////
  console.log("morgan enabled...");
}

//load env
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log("server running in " + app.get("env") + " mode on port " + port);
});
