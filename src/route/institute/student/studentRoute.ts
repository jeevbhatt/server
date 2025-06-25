import express, { Router } from "express"
import asyncErrorHandler from "../../../services/asyncErrorHandler"
import { createStudent, deleteStudent, getAllStudents, getSingleStudent } from "../../../controller/institute/student/studentController"
import upload from '../../../middleware/multerUpload';
import isLoggedIn from '../../../middleware/middleware';

const router:Router = express.Router()

router.route("/")
.get(asyncErrorHandler(getAllStudents))
.get(asyncErrorHandler(getSingleStudent))
.post(isLoggedIn,upload.single('studentPhoto'),asyncErrorHandler(createStudent))
.delete(asyncErrorHandler(deleteStudent))



export default router

