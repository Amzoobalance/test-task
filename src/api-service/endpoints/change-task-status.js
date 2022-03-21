const { ObjectId } = require("mongodb");

const changeTaskStatus = async (req, res) => {
  const _id = new ObjectId(req.params.id);
  const tasksCollection = req.mongodb.db("mongo").collection("tasks");
  const task = await tasksCollection.findOne({ _id });
  await tasksCollection.updateOne(
    { _id },
    { $set: { activated: !task.activated } }
  );
  task.activated = !task.activated;
  res.json(task);
};

module.exports = {
  changeTaskStatus,
};
