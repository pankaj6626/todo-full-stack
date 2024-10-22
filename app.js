const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
require('dotenv').config();
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server Started");
});
