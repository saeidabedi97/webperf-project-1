import compression from "compression";
import express from "express";
import fs from "fs";
import staticHandler from "./staticHandler.mjs";
import spdy from "spdy";

const app = express();
app.get("/", (req, res) => {
  staticHandler(req, res);
});

app.use(compression({ threshold: 0 }), express.static("dist"));

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
