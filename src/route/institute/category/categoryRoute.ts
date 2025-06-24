import { Router } from 'express';
import isLoggedIn from "../../../middleware/middleware";
import asyncErrorHandler from "../../../services/asyncErrorHandler";
import { createCategory, getCategories, deleteCategory } from "../../../controller/institute/category/categoryController";

const router: Router = Router();

router.route("/")
  .post(isLoggedIn, asyncErrorHandler(createCategory))
  .get(isLoggedIn, asyncErrorHandler(getCategories));

router.route("/:id")
  .delete(isLoggedIn, asyncErrorHandler(deleteCategory));

export default router;
