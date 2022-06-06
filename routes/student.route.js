const {
   getStudents,
   createStudents,
} = require("../controllers/student.controller");

const router = require("express").Router();

router.get("/", getStudents);

router.post("/", createStudents);

module.exports = router;
