import dotenv from "dotenv";
dotenv.config("../.env");

const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;

console.log(process.env.API_VERSION);

const books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" },
];

const booksDataModel = books.map((book) => ({
  self: `${API_BASE_URL}/${book.id}`,
  data: [
    {
      name: "id",
      value: book.id,
      prompt: "Book ID",
    },
    {
      name: "title",
      value: book.title,
      prompt: "Book Title",
    },
  ],
}));

const allBooksResponseModel = {
  href: "https://api.asifshahzad.me/books",
  version: API_VERSION,
  items: booksDataModel,
  _links: [
    {
      prompt: "GET a book by id",
      rel: "books/{id}",
      href: `${API_BASE_URL}/books/{id}`,
      method: "GET",
    },
    {
      prompt: "POST a new book",
      rel: "books",
      href: `${API_BASE_URL}/books`,
      method: "POST",
    },
    {
      prompt: "DELETE a book by id",
      rel: "books/{id}",
      href: `${API_BASE_URL}/books/{id}`,
      method: "DELETE",
    },
  ],
  template: {
    title: "Book title",
  },
};

function singleBookModel(book) {
  return {
    href: API_BASE_URL,
    version: API_VERSION,
    item: [
      {
        self: `${API_BASE_URL}/books/${book.id}`,
        data: [
          {
            name: "id",
            value: book.id,
            prompt: "Book ID",
          },
          {
            name: "title",
            value: book.title,
            prompt: "Book Title",
          },
        ],
      },
    ],
    _links: [
      {
        prompt: "GET all books",
        rel: "books",
        href: `${API_BASE_URL}/books`,
        method: "GET",
      },
      {
        prompt: "POST a new book",
        rel: "books",
        href: `${API_BASE_URL}/books`,
        method: "POST",
      },
      {
        prompt: "DELETE a book by id",
        rel: "books/{id}",
        href: `${API_BASE_URL}/books/{id}`,
        method: "DELETE",
      },
    ],
    template: {
      title: "Book title",
    },
  };
}

export { books, allBooksResponseModel, singleBookModel };
