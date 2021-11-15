import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import swaggerSpec, { swaggerUiOptions } from './api/swagger/swaggerSpec';

import Router from "./api/routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req, res) => res.redirect('/docs'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
