import express from 'express';
const app = express();
import authRoute from './route/globals/auth/authRoute';
import instituteRoute from './route/institute/instituteRoute';
import courseRoute from './route/institute/course/courseRoute';
import categoryRoute from './route/institute/category/categoryRoute';
import teacherRoute from './route/institute/teacher/teacherRoute';
import studentRoute from './route/institute/student/studentRoute';

app.use(express.json());
app.use('/api/', authRoute);
app.use('/api/institute', instituteRoute); // Assuming you have an institute route as well
app.use('/api/institute/course', courseRoute);
app.use('/api/institute/category', categoryRoute);
app.use('/api/institute/teacher', teacherRoute);
app.use('/api/institute/student', studentRoute);

export default app;
