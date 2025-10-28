const API_BASE_URL = "https://api.asifshahzad.me";
const API_VERSION = "v1";

const initialResponse = {
  href: API_BASE_URL,
  version: API_VERSION,
  _links: [
    {
      prompt: "GET all books",
      rel: "books",
      href: `${API_BASE_URL}/books`,
      method: "GET",
    },
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
};

export default initialResponse;
