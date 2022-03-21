const getTasks = async (req, res) => {
  const tasksCollection = req.mongodb.db("mongo").collection("tasks");
  const tasks = await tasksCollection.find({}).toArray();
  res.json(tasks);
};

module.exports = {
  getTasks,
};
