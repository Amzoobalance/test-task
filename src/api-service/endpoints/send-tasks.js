const sendTasks = async (req, res) => {
  const tasksCollection = req.mongodb.db("mongo").collection("tasks");
  const usersCollection = req.mongodb.db("mongo").collection("users");
  const tasks = await tasksCollection.find({ activated: true }).toArray();
  const users = await usersCollection.find({}).toArray();

  const result = {
    tasks,
    users,
  };
  await req.redis.publish("send", JSON.stringify(result));
  res.json({ norm: true });
};

module.exports = {
  sendTasks,
};
