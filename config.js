const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  emailApi: process.env.EMAIL_API_KEY,
  mongoDbUrl: process.env.MONGO_DB_URL,
  apiServicePort: process.env.API_SERVICE_PORT,
  renderServicePort: process.env.RENDERER_SERVICE_PORT,
};
