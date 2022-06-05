require("dotenv").config();
const app = require("express")();
const students = require("./students.json");

app.get("/", (req, res) => {
   return res.status(200).json({
      status: "Running",
      port: process.env.PORT,
      ip: req.ip,
      host: req.hostname,
   });
});

app.get("/students", (req, res) => {
   return res.status(200).send(students);
});

app.get("/students/:id", (req, res) => {
   const { id } = req.params;

   const filter = students.filter((item) => item.id == id);
   return res.status(200).send(filter);
});

app.listen(process.env.PORT, () =>
   console.log(`Server is running on localhost at port ${process.env.PORT}`)
);
