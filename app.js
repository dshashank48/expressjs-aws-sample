require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./config/dbConfig");

//get routes
const studentRoutes = require("./routes/student.route");
const { createStudents } = require("./controllers/student.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/students", studentRoutes);

// app.post("/api/students", createStudents);

app.get("/api", (req, res) => {
   return res.status(200).json({
      status: "Running",
      port: process.env.PORT,
      ip: req.ip,
      host: req.hostname,
   });
});

app.get("/", (req, res) => {
   return res.status(200).json({
      status: "Running",
      port: process.env.PORT,
      ip: req.ip,
      host: req.hostname,
   });
});

app.listen(process.env.PORT, () =>
   console.log(`Server is running on localhost at port ${process.env.PORT}`)
);
