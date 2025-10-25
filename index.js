import express from "express";
const app = express();

app.use(express.json());
app.set("json spaces", 2);

const books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" },
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
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

  res.status(200).json(book);
});

app.post("/books", (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "" || typeof title !== "string") {
    res.status(400).json({ error: "Title is required!" });
    return;
  }
  const id = books.length + 1;
  const newBook = { id, title: title.trim() };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  console.log(id);
  console.log(typeof id);

  if (isNaN(id)) {
    res.status(400).json({ error: "Please enter a valid number as an id!" });
    return;
  } else if (id < 1 || id > books.length) {
    res
      .status(404)
      .json({ error: `Please enter an id between 1 - ${books.length}` });
  } else {
    const deletedElement = books.splice(id - 1, 1);
    res.status(200).json({ message: "Book deleted!" });
  }
});

app.listen(3000, "localhost");

export default app;
