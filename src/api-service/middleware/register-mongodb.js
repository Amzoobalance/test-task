const registerMongoDB = (client) => async (req, res, next) => {
  await client.connect();
  req.mongodb = client;
  next();
};

module.exports = {
  registerMongoDB,
};
