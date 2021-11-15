import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import swaggerSpec, { swaggerUiOptions } from "./api/swagger/swaggerSpec";

import Router from "./api/routes";
import errorMiddleware from "./api/middlewares/errorMiddleware";

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => res.redirect("/docs"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);

app.use(Router);
app.use(errorMiddleware);

export default app;
