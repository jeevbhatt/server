import express, { Router } from "express"
import asyncErrorHandler from "../../../services/asyncErrorHandler"
import { getAllStudents } from "../../../controller/institute/student/studentController"


const router:Router = express.Router()

router.route("/")
.get(asyncErrorHandler(getAllStudents))



export default router

