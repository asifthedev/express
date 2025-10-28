import express from "express";
import {
  booksRouteController,
  bookByIdController,
  postBookByIdController,
  deleteBookByIdController,
} from "../controllers/book.controllers.js";

const router = express.Router();

router.get("/", booksRouteController);

router.get("/:id", bookByIdController);

router.post("/", postBookByIdController);

router.delete("/:id", deleteBookByIdController);

export default router;
