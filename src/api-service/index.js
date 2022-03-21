const express = require("express");
const cors = require("cors");
const redis = require("redis");
const { MongoClient } = require("mongodb");
const { mongoDbUrl, apiServicePort } = require("../../config");
const { registerMongoDB } = require("./middleware/register-mongodb");
const { getTasks } = require("./endpoints/get-tasks");
const { changeTaskStatus } = require("./endpoints/change-task-status");
const { registerRedis } = require("./middleware/register-redis");
const { sendTasks } = require("./endpoints/send-tasks");

const mongodbClient = new MongoClient(mongoDbUrl);
const redisClient = redis.createClient();

const app = express();

app.use(cors());
app.use(registerMongoDB(mongodbClient));

app.get("/api/v1/tasks", getTasks);
app.patch("/api/v1/tasks/:id", changeTaskStatus);
app.post("/api/v1/send", registerRedis(redisClient), sendTasks);

app.listen(apiServicePort, () =>
  console.log(`Server started on port ${apiServicePort}`)
);
