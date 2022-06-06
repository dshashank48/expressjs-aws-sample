const {
   getStudents,
   createStudents,
   getStudentById,
} = require("../controllers/student.controller");

const router = require("express").Router();

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.post("/", createStudents);

module.exports = router;
