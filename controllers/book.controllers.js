import {
  books,
  allBooksResponseModel,
  singleBookModel,
} from "../models/books.js";
import initialResponse from "../models/initialResponse.js";

const homeRouteController = (req, res) => {
  res.status(200).json(initialResponse);
};

const booksRouteController = (req, res) => {
  res.status(200).json(allBooksResponseModel);
};

const bookByIdController = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: "Please pass a valid number as an id.",
    });
  }

  const book = books.find((e) => e.id === id);

  if (!book) {
    return res.status(404).json({
      error: `Book with id ${id} not found. Valid IDs are 1-${books.length}.`,
    });
  }

  res.status(200).json(singleBookModel(book));
};

const postBookByIdController = (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "" || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required!" });
  }

  const id = books.length + 1;
  const newBook = { id, title: title.trim() };
  books.push(newBook);
  res.status(201).json(newBook);
};

const deleteBookByIdController = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ error: "Please enter a valid number as an id!" });
  }

  if (id < 1 || id > books.length) {
    return res
      .status(404)
      .json({ error: `Please enter an id between 1 - ${books.length}` });
  }

  books.splice(id - 1, 1);
  res.status(200).json({ message: "Book deleted successfully!" });
};

export {
  homeRouteController,
  booksRouteController,
  bookByIdController,
  postBookByIdController,
  deleteBookByIdController,
};
