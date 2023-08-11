import studentModel from "../model/student.js";

const studentController = {
    getAll: (req, res) => {
        const students = studentModel.getAll();
        return res.json(students);
    },
};

export default studentController;