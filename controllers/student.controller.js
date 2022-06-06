const res500 = require("../config/res500");
const StudentSchema = require("../models/StudentSchema");

exports.getStudents = async (req, res) => {
   try {
      const students = await StudentSchema.find();

      console.log(students);

      return res.status(200).json(students);
   } catch (error) {
      return res500(res, error);
   }
};

exports.createStudents = async (req, res) => {
   try {
      const { name, age, course } = req.body;

      let student = new StudentSchema({ name, age, course });

      await student.save();

      return res.status(200).json(student);
   } catch (error) {
      console.log(error);
      return res500(res, error);
   }
};

exports.getStudentById = async (req, res) => {
   try {
      const { id } = req.params;

      const student = await StudentSchema.findById(id);

      return res.status(200).json(student);
   } catch (error) {
      console.log(error);
      return res500(res, error);
   }
};
