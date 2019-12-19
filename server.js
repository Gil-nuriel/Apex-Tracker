const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/profiles"));

//load env
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("server running on port " + port);
});
