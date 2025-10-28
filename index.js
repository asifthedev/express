import express from "express";
import bookRouter from "./routes/book.routes.js";
import { logger } from "./middlewares/logger.js";
import { homeRouteController } from "./controllers/book.controllers.js";

const app = express();

// middlewares
app.use(logger);
app.use(express.json());

app.set("json spaces", 2);

app.get("/", homeRouteController);

app.use("/books", bookRouter);

app.listen(3000, "localhost");

app.use((err, req, res, next) => {
  res.send({ error: err.message });
});

export default app;
