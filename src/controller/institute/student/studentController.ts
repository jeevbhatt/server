import { Response } from "express";
import sequelize from "../../../database/connection";
import { IExtendedRequest } from "../../../middleware/type";



const getStudents = async (req:IExtendedRequest,res:Response)=>{
    const instituteNumber = req.user?.currentInstituteNumber
    const students = await sequelize.query(`SELECT * FROM student_${instituteNumber}`)
    res.status(200).json({
        message : "students fetched",
        data : students
    })
}
// Create a new student
const createStudent = async (req: IExtendedRequest, res: Response) => {
    const instituteNumber = req.user?.currentInstituteNumber;
    const { name, email, rollNumber } = req.body;
    if (!name || !email || !rollNumber) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const [result] = await sequelize.query(
        `INSERT INTO student_${instituteNumber} (name, email, rollNumber) VALUES (?, ?, ?)`,
        { replacements: [name, email, rollNumber] }
    );
    res.status(201).json({ message: "Student created", data: result });
};

// Get all students
const getAllStudents = async (req: IExtendedRequest, res: Response) => {
    const instituteNumber = req.user?.currentInstituteNumber;
    const [students] = await sequelize.query(
        `SELECT * FROM student_${instituteNumber}`
    );
    res.status(200).json({ message: "Students fetched", data: students });
};

// Get a single student by ID
const getSingleStudent = async (req: IExtendedRequest, res: Response) => {
    const instituteNumber = req.user?.currentInstituteNumber;
    const { id } = req.params;
    const [students]: any = await sequelize.query(
        `SELECT * FROM student_${instituteNumber} WHERE id = ?`,
        { replacements: [id] }
    );
    if (!students || students.length === 0) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student fetched", data: students[0] });
};

// Delete a student by ID
const deleteStudent = async (req: IExtendedRequest, res: Response) => {
    const instituteNumber = req.user?.currentInstituteNumber;
    const { id } = req.params;
    const [result]: any = await sequelize.query(
        `DELETE FROM student_${instituteNumber} WHERE id = ?`,
        { replacements: [id] }
    );
    res.status(200).json({ message: "Student deleted", data: result });
};

export { getStudents, createStudent, deleteStudent, getAllStudents, getSingleStudent }
