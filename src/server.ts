import logger from "./libs/logger";
import app from "./app";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  logger.log("Server is running on port:", PORT);
});
